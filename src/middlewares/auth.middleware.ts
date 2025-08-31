import { Role, User } from "@prisma/client";
import { db } from "../lib/db";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";
import * as env from "../lib/env";

type JWTPayload = Pick<User, "id" | "email" | "username" | "role">;
type IUser = Omit<
  User,
  | "password"
  | "refreshToken"
  | "emailVerificationToken"
  | "emailVerificationExpiry"
>;

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) throw new ApiError(401, "Unauthorized Request");

  try {
    const decodedToken = jwt.verify(
      token,
      env.ACCESS_TOKEN_SECRET as jwt.Secret
    ) as JWTPayload;

    const user = (await db.user.findUnique({
      where: { id: decodedToken.id },
      omit: {
        password: true,
        refreshToken: true,
        emailVerificationToken: true,
        emailVerificationExpiry: true,
      },
    })) as IUser | null;

    if (!user) {
      // Client should make a request to /api/v1/users/refresh-token if they have refreshToken present in their cookie
      // Then they will get a new access token which will allow them to refresh the access token without logging out the user
      throw new ApiError(401, "Invalid access token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, (error as any)?.message || "Invalid access token");
  }
});

export const getLoggedInUserOrIgnore = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  try {
    const decodedToken = jwt.verify(
      token,
      env.ACCESS_TOKEN_SECRET as jwt.Secret
    ) as JWTPayload;

    const user = (await db.user.findUnique({
      where: { id: decodedToken.id },
      omit: {
        password: true,
        refreshToken: true,
        emailVerificationToken: true,
        emailVerificationExpiry: true,
      },
    })) as IUser | null;

    req.user = user;
    next();
  } catch (error) {
    // Fail silently with req.user being falsy
    next();
  }
});

export const verifyPermission = (roles: Role[]) =>
  asyncHandler(async (req, res, next) => {
    if (!req.user?.id) {
      throw new ApiError(401, "Unauthorized request");
    }
    if (roles.includes(req.user?.role)) {
      next();
    } else {
      throw new ApiError(403, "You are not allowed to perform this action");
    }
  });

export const avoidInProduction = asyncHandler(async (req, res, next) => {
  if (env.NODE_ENV === "development") {
    next();
  } else {
    throw new ApiError(
      403,
      "This service is only available in the local environment. For more details visit: https://github.com/hiteshchoudhary/apihub/#readme"
    );
  }
});
