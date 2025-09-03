import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import requestIP from "request-ip";

import morganMiddleware from "./logger/morgan.logger";
import { errorHandler } from "./middlewares/error.middleware";
import { ApiError } from "./utils/ApiError";

// Routers
import userRoute from "./routes/user.route";
import quoteRoute from "./routes/quote.route";
import statusCodeRoute from "./routes/statuscode.route";
import redirectRoute from "./routes/redirect.route";
import todoRoute from "./routes/todo.route";

// Routers - Social
import profileSocialRoute from "./routes/social-media/profile.route";

const app = express();

// Rate limiter to avoid misuse of the service and avoid cost spikes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5000,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req, res) => {
    return req.clientIp || "unknown";
  },
  handler: (_, __, ___, options) => {
    throw new ApiError(
      options.statusCode || 500,
      `There are too many requests. You are only allowed ${
        options.max
      } requests per ${options.windowMs / 60000} minutes`
    );
  },
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));
app.use(requestIP.mw());
app.use(limiter);

app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("Express Routes Found");
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/quotes", quoteRoute);
app.use("/api/v1/status", statusCodeRoute);
app.use("/api/v1/redirect", redirectRoute);
app.use("/api/v1/todo", todoRoute);

app.use("/api/v1/social-media/profile", profileSocialRoute);

app.use(errorHandler);

export default app;
