import { Router } from "express";
import {
  getLoggedInUserOrIgnore,
  verifyJWT,
} from "../../middlewares/auth.middleware";
import {
  getProfileByUserNameValidator,
  updateSocialProfileValidator,
} from "../../validators/social-media/profile.validators";
import { validate } from "../../validators/validate";
import {
  getMySocialProfile,
  getProfileByUserName,
  updateCoverImage,
  updateSocialProfile,
} from "../../controllers/social-media/profile.controller";
import { upload } from "../../middlewares/multer.middleware";

const router = Router();

router
  .route("/u/:username")
  .get(
    getLoggedInUserOrIgnore,
    getProfileByUserNameValidator(),
    validate,
    getProfileByUserName
  );

router.use(verifyJWT);

router
  .route("/")
  .get(getMySocialProfile)
  .patch(updateSocialProfileValidator(), validate, updateSocialProfile);

router
  .route("/cover-image")
  .patch(upload.single("coverImage"), updateCoverImage);

export default router;
