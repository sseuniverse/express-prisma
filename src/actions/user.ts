import { User } from "@prisma/client";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import * as env from "../lib/env";

export const generateAccessToken = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    },
    env.ACCESS_TOKEN_SECRET as jwt.Secret,
    { expiresIn: "1h" }
  );
};

export const generateRefreshToken = (user: User) => {
  return jwt.sign({ id: user.id }, env.REFRESH_TOKEN_SECRET as jwt.Secret, {
    expiresIn: "30d",
  });
};

export const generateTemporaryToken = () => {
  // This token should be client facing
  // for example: for email verification unHashedToken should go into the user's mail
  const unHashedToken = crypto.randomBytes(20).toString("hex");

  // This should stay in the DB to compare at the time of verification
  const hashedToken = crypto
    .createHash("sha256")
    .update(unHashedToken)
    .digest("hex");

  // This is the expiry time for the token (20 minutes)
  const tokenExpiry = Date.now() + 1200000;

  return { unHashedToken, hashedToken, tokenExpiry };
};
