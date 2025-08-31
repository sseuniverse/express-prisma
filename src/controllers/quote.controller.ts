import { db } from "../lib/db";
import { filterObjectKeys, getRandomNumber, slugify } from "../utils/helpers";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const getQuotes = asyncHandler(async (req, res) => {
  const page = +(req.query.page || 1);
  const limit = +(req.query.limit || 10);
  const queryQuery = req.query.query as string | undefined;
  const incQuery = req.query.inc as string;

  const query = queryQuery?.toLowerCase();
  const inc = incQuery?.split(",");

  let select: Record<string, boolean> = {
    id: true,
    content: true,
  };
  if (inc) {
    select = {};
    inc.forEach((field) => {
      select[field] = true;
    });
  }

  const total = await db.quotes.count({
    where: query
      ? {
          OR: [
            { content: { contains: query, mode: "insensitive" } },
            { author: { contains: query, mode: "insensitive" } },
          ],
        }
      : {},
  });

  const quotes = await db.quotes.findMany({
    where: query
      ? {
          OR: [
            { content: { contains: query, mode: "insensitive" } },
            { author: { contains: query, mode: "insensitive" } },
          ],
        }
      : {},
    select,
    skip: (page - 1) * limit,
    take: limit,
  });

  const paginatedQuotes = {
    data: quotes,
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };

  // If inc is provided, filter keys (optional, since Prisma select already filters)
  const updatedQuotes = inc
    ? filterObjectKeys(inc, paginatedQuotes.data)
    : paginatedQuotes.data;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        ...paginatedQuotes,
        data: updatedQuotes,
      },
      "Quotes fetched successfully"
    )
  );
});

const getQuoteById = asyncHandler(async (req, res) => {
  const { quoteId } = req.params;
  const quote = await db.quotes.findUnique({
    where: { id: quoteId },
    include: {
      creator: {
        omit: {
          password: true,
          forgotPasswordExpiry: true,
          forgotPasswordToken: true,
          emailVerificationExpiry: true,
          emailVerificationToken: true,
        },
      },
    },
  });

  if (!quote) {
    throw new ApiError(404, "Quote does not exist.");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, quote, "Quote fetched successfully"));
});

const getARandomQuote = asyncHandler(async (req, res) => {
  const total = await db.quotes.count();
  if (!total) {
    throw new ApiError(404, "Quotes not exist.");
  }

  const randomIndex = getRandomNumber(total);
  const randomQuote = await db.quotes.findMany({
    skip: randomIndex,
    take: 1,
    include: {
      creator: {
        omit: {
          password: true,
          forgotPasswordExpiry: true,
          forgotPasswordToken: true,
          emailVerificationExpiry: true,
          emailVerificationToken: true,
        },
      },
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, randomQuote, "Quote fetched successfully"));
});

const addQuotes = asyncHandler(async (req, res) => {
  const { content, tags, author } = req.body;

  if (!content || !author) {
    throw new ApiError(400, "Missing required fields");
  }

  const length = content.length;
  const authorSlug = slugify(author);

  const newQuote = await db.quotes.create({
    data: {
      content,
      tags: tags || [],
      creatorId: req.user.id,
      author,
      authorSlug,
      length,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, newQuote, "Quote added successfully"));
});

const updatedQuotes = asyncHandler(async (req, res) => {
  const { quoteId } = req.params;
  const { content, tags, author } = req.body;

  const existingQuote = await db.quotes.findUnique({
    where: { id: quoteId },
  });

  if (!existingQuote) {
    throw new ApiError(404, "Quote not found");
  }

  if (existingQuote.creatorId !== req.user.id) {
    throw new ApiError(404, "Not applicable to update");
  }

  const length = content ? content.length : existingQuote.length;
  const authorSlug = author ? slugify(author) : existingQuote.authorSlug;

  const updatedQuote = await db.quotes.update({
    where: { id: quoteId },
    data: {
      content,
      tags,
      author,
      authorSlug,
      length,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, updatedQuote, "Quote updated successfully"));
});

const deleteQuote = asyncHandler(async (req, res) => {
  const { quoteId } = req.params;

  const existingQuote = await db.quotes.findUnique({
    where: { id: quoteId },
  });

  if (!existingQuote) {
    throw new ApiError(404, "Quote not found");
  }

  if (existingQuote.creatorId !== req.user.id) {
    throw new ApiError(404, "Not applicable to delete");
  }

  await db.quotes.delete({
    where: { id: quoteId },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Quote deleted successfully"));
});

export {
  getQuotes,
  getQuoteById,
  getARandomQuote,
  addQuotes,
  updatedQuotes,
  deleteQuote,
};
