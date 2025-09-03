import { Router } from "express";
import { verifyJWT } from "../../middlewares/auth.middleware";
import { mongoIdPathVariableValidator } from "../../validators/mongodb.validators";
import { validate } from "../../validators/validate";
import { bookmarkUnBookmarkPost } from "../../controllers/social-media/bookmark.controller";
import { getBookMarkedPosts } from "../../controllers/social-media/post.controller";

const router = Router();

router.use(verifyJWT);

router.route("/").get(getBookMarkedPosts); // getBookMarkedPosts controller is present in posts controller due to utility function dependency

router
  .route("/:postId")
  .post(
    mongoIdPathVariableValidator("postId"),
    validate,
    bookmarkUnBookmarkPost
  );

export default router;
