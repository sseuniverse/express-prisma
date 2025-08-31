import { db } from "../lib/db";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

/**
 * @description status codes which are avoiding sending response due to their nature
 */
const CONFLICTING_STATUS_CODES = [100, 102, 103, 204, 205, 304];

const getStatusCode = asyncHandler(async (req, res) => {
  const statusCode = Number(req.params.statusCode);

  const payload = await db.statusCode.findUnique({
    where: { statusCode: statusCode },
  });

  if (!payload) {
    throw new ApiError(404, "Invalid status code");
  }

  return res
    .status(
      CONFLICTING_STATUS_CODES.includes(payload.statusCode)
        ? 200
        : payload.statusCode
    )
    .json(
      new ApiResponse(
        payload.statusCode,
        { ...payload },
        `${payload.statusCode}: ${payload.statusMessage}`
      )
    );
});

const getAllStatusCodes = asyncHandler(async (req, res) => {
  const payload = await db.statusCode.findMany();

  return res
    .status(200)
    .json(new ApiResponse(200, payload, "Status codes fetched"));
});

export { getAllStatusCodes, getStatusCode };
