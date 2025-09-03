import { db } from "../../lib/db";
import { ApiError } from "../../utils/ApiError";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

const addComment = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  const comment = await db.socialComment.create({
    data: {
      content,
      authorId: req.user.id,
      postId,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, comment, "Comment added successfully"));
});

const getPostComments = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const skip = (Number(page) - 1) * Number(limit);
  const userId = req.user.id;

  const totalComments = await db.socialComment.count({ where: { postId } });

  const comments = await db.socialComment.findMany({
    where: { postId },
    skip,
    take: Number(limit),
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          email: true,
          avatar: {
            select: {
              url: true,
              localPath: true,
            },
          },
        },
      },
      SocialLike: true,
    },
  });

  const mappedComments = comments.map(async (comment) => {
    const likesCounts = comment.SocialLike.length;
    const isLiked = comment.SocialLike.some(
      (like) => like.likedById === userId
    );

    const profile = await db.socialProfile.findUnique({
      where: { ownerId: comment.author.id },
    });

    return {
      ...comment,
      likes: likesCounts,
      isLiked,
      author: {
        id: profile?.id,
        account: {
          id: comment.author.id,
          username: comment.author.username,
          email: comment.author.email,
          avatar: comment.author.avatar,
        },
        firstName: profile?.firstName,
        lastName: profile?.lastName,
      },
    };
  });

  const totalPages = Math.ceil(totalComments / Number(limit));
  const hasNextPage = Number(page) < totalPages;
  const hasPrevPage = Number(page) > 1;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        comments: mappedComments,
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage: hasNextPage ? Number(page) + 1 : null,
        page,
        prevPage: hasPrevPage ? Number(page) - 1 : null,
        serialNumberStartFrom: skip + 1,
        totalComments,
        totalPages,
      },
      "Post comments fetched successfully"
    )
  );
});

const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  const getComment = await db.socialComment.findUnique({
    where: { id: commentId, authorId: req.user.id },
  });

  if (!getComment) {
    throw new ApiError(
      404,
      "Comment is already deleted or you are not authorized for this action."
    );
  }

  const deletedComment = await db.socialComment.delete({
    where: {
      id: commentId,
      authorId: req.user.id,
    },
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { deletedComment }, "Comment deleted successfully")
    );
});

const updateComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  const getComment = await db.socialComment.findUnique({
    where: { id: commentId, authorId: req.user.id },
  });

  if (!getComment) {
    throw new ApiError(
      404,
      "Comment does not exist or you are not authorized for this action."
    );
  }

  const updateComment = await db.socialComment.update({
    where: { id: commentId, authorId: req.user.id },
    data: { content },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, updateComment, "Comment updated successfully"));
});
