import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Role, User, UserType } from "@prisma/client";
import bcrypt from "bcrypt";
import { CookieOptions } from "express";
import { db } from "../lib/db";
import * as env from "../lib/env";
import {
  generateAccessToken,
  generateRefreshToken,
  generateTemporaryToken,
} from "../actions/user";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
} from "../utils/mail";

type IUser = Omit<
  User,
  | "password"
  | "refreshToken"
  | "emailVerificationToken"
  | "emailVerificationExpiry"
>;

const generateAccessAndRefreshTokens = async (userId: string) => {
  try {
    const user = (await db.user.findUnique({
      where: { id: userId },
    })) as User | null;

    if (!user) throw new Error("User not found");
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await db.user.update({
      where: { id: userId },
      data: { refreshToken: refreshToken },
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(
      `Something went wrong while generating the access token: ${error} `
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  const existedUser = await db.user.findFirst({
    where: { OR: [{ username: username }, { email: email }] },
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists", []);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      username,
      isEmailVerified: false,
      role: role || Role.USER,
    },
  });

  const { unHashedToken, hashedToken, tokenExpiry } = generateTemporaryToken();

  await db.user.update({
    where: { id: user.id },
    data: {
      emailVerificationToken: hashedToken,
      emailVerificationExpiry: new Date(tokenExpiry),
    },
  });

  await sendEmail({
    email: user.email,
    subject: "Please verify your email",
    mailgenContent: emailVerificationMailgenContent(
      user.username,
      `${req.protocol}://${req.get(
        "host"
      )}/api/v1/users/verify-email/${unHashedToken}`
    ),
  });

  const createdUser = (await db.user.findUnique({
    where: { id: user.id },
    omit: {
      password: true,
      refreshToken: true,
      emailVerificationToken: true,
      emailVerificationExpiry: true,
    },
  })) as IUser | null;

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json(
    new ApiResponse(
      200,
      {
        user: createdUser,
        url: `${req.protocol}://${req.get(
          "host"
        )}/api/v1/users/verify-email/${unHashedToken}`,
      },
      "Users registered successfully and verification email has been sent on your email."
    )
  );
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "Username or email is required");
  }

  const user = await db.user.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });

  if (!user) throw new ApiError(404, "User does not exist");

  if (user.loginType !== UserType.EMAIL_PASSWORD) {
    // If user is registered with some other method, we will ask him/her to use the same method as registered.
    // This shows that if user is registered with methods other than email password, he/she will not be able to login with password. Which makes password field redundant for the SSO
    throw new ApiError(
      400,
      "You have previously registered using " +
        user.loginType?.toLowerCase() +
        ". Please use the " +
        user.loginType?.toLowerCase() +
        " login option to access your account."
    );
  }

  // Compare the incoming password with hashed password
  const isPasswordValid = bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new ApiError(401, "Invalid user credentials");

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user.id
  );

  const loggedInUser = (await db.user.findUnique({
    where: { id: user.id },
    omit: {
      password: true,
      refreshToken: true,
      emailVerificationToken: true,
      emailVerificationExpiry: true,
    },
  })) as IUser | null;

  const options: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await db.user.update({
    where: { id: req.user.id },
    data: { refreshToken: "" },
  });

  const options: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out"));
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params;

  if (!verificationToken) {
    throw new ApiError(400, "Email verification token is missing");
  }

  // generate a hash from the token that we are receiving
  let hashedToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  console.log(hashedToken);

  // While registering the user, same time when we are sending the verification mail
  // we have saved a hashed value of the original email verification token in the db
  // We will try to find user with the hashed token generated by received token
  // If we find the user another check is if token expiry of that token is greater than current time if not that means it is expired
  const user = await db.user.findFirst({
    where: {
      emailVerificationToken: hashedToken,
      emailVerificationExpiry: {
        gt: new Date(Date.now()),
      },
    },
  });

  if (!user) {
    throw new ApiError(489, "Token is invalid or expired");
  }

  await db.user.update({
    where: { id: user.id },
    data: {
      emailVerificationToken: undefined,
      emailVerificationExpiry: undefined,
      isEmailVerified: true,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, { isEmailVerified: true }, "Email is verified"));
});

// This controller is called when user is logged in and he has snackbar that your email is not verified
// In case he did not get the email or the email verification token is expired
// he will be able to resend the token while he is logged in
const resendEmailVerification = asyncHandler(async (req, res) => {
  const user = await db.user.findUnique({
    where: { id: req.user.id },
  });

  if (!user) {
    throw new ApiError(404, "User does not exists", []);
  }

  if (user.isEmailVerified) {
    throw new ApiError(409, "Email is already verified!");
  }

  const { unHashedToken, hashedToken, tokenExpiry } = generateTemporaryToken();

  await db.user.update({
    where: { id: user.id },
    data: {
      emailVerificationToken: hashedToken,
      emailVerificationExpiry: new Date(tokenExpiry),
    },
  });

  await sendEmail({
    email: user?.email,
    subject: "Please verify your email",
    mailgenContent: emailVerificationMailgenContent(
      user.username,
      `${req.protocol}://${req.get(
        "host"
      )}/api/v1/users/verify-email/${unHashedToken}`
    ),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Mail has been sent to your mail ID"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      env.REFRESH_TOKEN_SECRET
    ) as Pick<User, "id" | "email" | "username" | "role">;

    const user = await db.user.findUnique({
      where: { id: decodedToken.id },
    });

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    // check if incoming refresh token is same as the refresh token attached in the user document
    // This shows that the refresh token is used or not
    // Once it is used, we are replacing it with new refresh token below
    if (incomingRefreshToken !== user.refreshToken) {
      // If token is valid but is used already
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const options: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefreshTokens(user.id);

    // Update the user's refresh token in the database
    await db.user.update({
      where: { id: user.id },
      data: { refreshToken: newRefreshToken },
    });

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, (error as any)?.message || "Invalid refresh token");
  }
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await db.user.findUnique({
    where: { email: email },
  });

  if (!user) throw new ApiError(404, "User does not exists", []);

  // Generate a temporary token
  const { unHashedToken, hashedToken, tokenExpiry } = generateTemporaryToken();

  // save the hashed version a of the token and expiry in the DB
  await db.user.update({
    where: { id: user.id },
    data: {
      forgotPasswordToken: hashedToken,
      forgotPasswordExpiry: new Date(tokenExpiry),
    },
  });

  // Send mail with the password reset link. It should be the link of the frontend url with token
  await sendEmail({
    email: user?.email,
    subject: "Password reset request",
    mailgenContent: forgotPasswordMailgenContent(
      user.username,
      // ! NOTE: Following link should be the link of the frontend page responsible to request password reset
      // ! Frontend will send the below token with the new password in the request body to the backend reset password endpoint
      `${process.env.FORGOT_PASSWORD_REDIRECT_URL}/${unHashedToken}`
    ),
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {},
        "Password reset mail has been sent on your mail id"
      )
    );
});

const resetForgottenPassword = asyncHandler(async (req, res) => {
  const { resetToken } = req.params;
  const { newPassword } = req.body;

  // Create a hash of the incoming reset token

  let hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // See if user with hash similar to resetToken exists
  // If yes then check if token expiry is greater than current date
  const user = await db.user.findFirst({
    where: {
      forgotPasswordToken: hashedToken,
      forgotPasswordExpiry: {
        gt: new Date(Date.now()),
      },
    },
  });

  // If either of the one is false that means the token is invalid or expired
  if (!user) {
    throw new ApiError(489, "Token is invalid or expired");
  }

  // if everything is ok and token id valid
  // reset the forgot password token and expiry
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await db.user.update({
    where: { id: user.id },
    data: {
      forgotPasswordToken: undefined,
      forgotPasswordExpiry: undefined,
      password: hashedPassword,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password reset successfully"));
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = (await db.user.findUnique({
    where: { id: req.user.id },
  })) as User | null;

  if (!user || !user.password) {
    throw new ApiError(489, "User not found");
  }

  // check the old password
  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid old password");
  }

  // assign new password in plain text
  // We have a pre save method attached to user schema which automatically hashes the password whenever added/modified
  if (user) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const assignRole = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;
  const user = await db.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  await db.user.update({
    where: { id: user.id },
    data: { role: role },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Role changed for the user"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

const handleSocialLogin = asyncHandler(async (req, res) => {
  const user = await db.user.findUnique({
    where: { id: req.user.id },
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user.id
  );

  const options: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(301)
    .cookie("accessToken", accessToken, options) // set the access token in the cookie
    .cookie("refreshToken", refreshToken, options) // set the refresh token in the cookie
    .redirect(
      // redirect user to the frontend with access and refresh token in case user is not using cookies
      `${process.env.CLIENT_SSO_REDIRECT_URL}?accessToken=${accessToken}&refreshToken=${refreshToken}`
    );
});

export {
  assignRole,
  changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  handleSocialLogin,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgottenPassword,
  // updateUserAvatar,
  verifyEmail,
};
