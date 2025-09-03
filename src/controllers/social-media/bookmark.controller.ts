import { db } from "../../lib/db";
import { ApiError } from "../../utils/ApiError";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

const bookmarkUnBookmarkPost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const post = await db.socialPost.findUnique({ where: { id: postId } });

  if (!post) {
    throw new ApiError(404, "Post does not exist");
  }

  const isAlreadyBookmarked = await db.socialBookmark.findFirst({
    where: { postId: postId, bookmarkedById: req.user.id },
  });

  if (isAlreadyBookmarked) {
    // if already bookmarked, dislike it by removing the record from the DB
    await db.socialBookmark.delete({
      where: { id: isAlreadyBookmarked.id },
    });
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          isBookmarked: false,
        },
        "Bookmark removed successfully"
      )
    );
  } else {
    // if not bookmarked, like it by adding the record from the DB
    await db.socialBookmark.create({
      data: { postId, bookmarkedById: req.user.id },
    });
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          isBookmarked: true,
        },
        "Bookmarked successfully"
      )
    );
  }
});

export { bookmarkUnBookmarkPost };
