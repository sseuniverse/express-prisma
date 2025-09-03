import { Request } from "express";
import { db } from "../../lib/db";
import { ApiError } from "../../utils/ApiError";
import { asyncHandler } from "../../utils/asyncHandler";
import { ApiResponse } from "../../utils/ApiResponse";
import {
  getLocalPath,
  getStaticFilePath,
  removeLocalFile,
} from "../../utils/helpers";

const getUserSocialProfile = async (
  userId: string,
  req: Request & { user?: any }
) => {
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const profile = await db.socialProfile.findUnique({
    where: { ownerId: userId },
    include: {
      owner: {
        select: {
          id: true,
          username: true,
          email: true,
          isEmailVerified: true,
          avatar: true,
        },
      },
    },
  });

  if (!profile) {
    throw new ApiError(404, "User profile does not exist");
  }

  const followersCount = await db.socialFollow.count({
    where: { followeeId: userId },
  });

  const followingCount = await db.socialFollow.count({
    where: { followerId: userId },
  });

  let isFollowing = false;
  if (req.user?.id && req.user.id !== userId) {
    const followInstance = await db.socialFollow.findFirst({
      where: {
        followerId: req.user.id,
        followeeId: userId,
      },
    });
    isFollowing = !!followInstance;
  }

  return {
    ...profile,
    id: profile.id,
    owner: profile.ownerId,
    account: {
      id: profile.owner.id,
      avatar: profile.owner.avatar,
      email: profile.owner.email,
      isEmailVerified: profile.owner.isEmailVerified,
      username: profile.owner.username,
    },
    followersCount,
    followingCount,
    isFollowing,
  };
};

const getMySocialProfile = asyncHandler(async (req, res) => {
  const profile = await getUserSocialProfile(req.user.id, req);
  return res
    .status(200)
    .json(new ApiResponse(200, profile, "User profile fetched successfully"));
});

const getProfileByUserName = asyncHandler(async (req, res) => {
  const { username } = req.params;
  const user = await db.user.findUnique({ where: { username: username } });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const userProfile = await getUserSocialProfile(user.id, req);

  return res
    .status(200)
    .json(
      new ApiResponse(200, userProfile, "User profile fetched successfully")
    );
});

const updateSocialProfile = asyncHandler(async (req, res) => {
  const { firstName, lastName, phoneNumber, countryCode, bio, dob, location } =
    req.body;

  const userProfile = await db.socialProfile.findUnique({
    where: { ownerId: req.user.id },
  });

  if (!userProfile) {
    throw new ApiError(404, "Profile does not exist");
  }

  let profile = await db.socialProfile.update({
    where: { id: userProfile.id },
    data: {
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      bio,
      dob,
      location,
    },
  });

  profile = await getUserSocialProfile(req.user.id, req);

  return res
    .status(200)
    .json(new ApiResponse(200, profile, "User profile updated successfully"));
});

const updateCoverImage = asyncHandler(async (req, res) => {
  // Check if user has uploaded a cover image
  if (!req.file?.filename) {
    throw new ApiError(400, "Cover image is required");
  }
  // get cover image file's system url and local path
  const coverImageUrl = getStaticFilePath(req, req.file?.filename);
  const coverImageLocalPath = getLocalPath(req.file?.filename);

  const profile = await db.socialProfile.findUnique({
    where: { ownerId: req.user.id },
  });

  if (!profile) {
    throw new ApiError(400, "Profile not found");
  }

  let updatedProfile = await db.socialProfile.update({
    where: { ownerId: req.user.id },
    data: {
      coverImage: {
        url: coverImageUrl,
        localPath: coverImageLocalPath,
      },
    },
  });

  removeLocalFile(profile.coverImage.localPath);
  updatedProfile = await getUserSocialProfile(req.user.id, req);

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedProfile, "Cover image updated successfully")
    );
});

export {
  getMySocialProfile,
  getProfileByUserName,
  updateSocialProfile,
  updateCoverImage,
};
