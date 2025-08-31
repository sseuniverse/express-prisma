import { Router } from "express";
import {
  getAllStatusCodes,
  getStatusCode,
} from "../controllers/statuscode.controller";
import { statusCodeValidator } from "../validators/statusCode.validator";
import { validate } from "../validators/validate";

const router = Router();

router.route("/").get(getAllStatusCodes);

router
  .route("/:statusCode")
  .get(statusCodeValidator(), validate, getStatusCode);

export default router;
