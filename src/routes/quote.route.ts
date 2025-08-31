import { Router } from "express";
import {
  addQuotes,
  deleteQuote,
  getARandomQuote,
  getQuoteById,
  getQuotes,
  updatedQuotes,
} from "../controllers/quote.controller";
import { verifyJWT } from "../middlewares/auth.middleware";

const router = Router();

// GET
router.route("/").get(getQuotes);
router.route("/:quoteId").get(getQuoteById);
router.route("/quote/random").get(getARandomQuote);

router.route("/").post(verifyJWT, addQuotes);
router.route("/:quoteId").put(verifyJWT, updatedQuotes);
router.route("/:quoteId").delete(verifyJWT, deleteQuote);

export default router;
