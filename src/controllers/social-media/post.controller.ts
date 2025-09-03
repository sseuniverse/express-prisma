import { db } from "../../lib/db";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { getPaginatedPayload, getStaticFilePath } from "../../utils/helpers";

const createPost = asyncHandler(async (req, res) => {
  const { content, tags } = req.body;
  // Check if user has uploaded any images if yes then extract the file path
  // else assign an empty array
});

const getBookMarkedPosts = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);

  const totalBookmarkedPost = await db.socialBookmark.count({
    where: { bookmarkedById: req.user.id },
  });

  const bookmarkedPost = await db.socialBookmark.findMany({
    where: { bookmarkedById: req.user.id },
    skip,
    take,
    include: {
      post: true,
    },
  });

  const posts = bookmarkedPost.map((bookmark) => bookmark.post);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { totalBookmarkedPost, bookmarkedPosts: posts },
        "Bookmarked posts fetched successfully"
      )
    );
});

export { getBookMarkedPosts };
