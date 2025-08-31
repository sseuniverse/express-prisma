import { Router } from "express";
import { redirectToTheUrlValidator } from "../validators/redirect.validators";
import { validate } from "../validators/validate";
import { redirectToTheUrl } from "../controllers/redirect.controller";

const router = Router();

router
  .route("/to")
  .get(redirectToTheUrlValidator(), validate, redirectToTheUrl);

export default router;
