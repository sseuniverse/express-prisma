import { db } from "../../lib/db";
import { ApiError } from "../../utils/ApiError";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

const likeDislikePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const post = await db.socialPost.findUnique({ where: { id: postId } });

  // Check for post existence
  if (!post) {
    throw new ApiError(404, "Post does not exist");
  }

  // See if user has already liked the post
  const isAlreadyLiked = await db.socialLike.findFirst({
    where: { postId, likedById: req.user.id },
  });

  if (isAlreadyLiked) {
    await db.socialLike.deleteMany({
      where: { postId, likedBy: req.user.id },
    });

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          isLiked: false,
        },
        "Unliked successfully"
      )
    );
  } else {
    // if not liked, like it by adding the record from the DB
    await db.socialLike.create({
      data: { postId, likedById: req.user.id },
    });
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          isLiked: true,
        },
        "Liked successfully"
      )
    );
  }
});
