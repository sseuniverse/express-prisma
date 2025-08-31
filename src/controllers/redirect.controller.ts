import { asyncHandler } from "../utils/asyncHandler";

const redirectToTheUrl = asyncHandler(async (req, res) => {
  const url = req.query.url;

  if (typeof url !== "string" || !url) {
    return res.status(400).json({ error: "Invalid or missing url parameter" });
  }

  return res.status(301).redirect(url);
});

export { redirectToTheUrl };
