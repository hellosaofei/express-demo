import express from "express";

import iconRoute from "./backstage/icon.js";
import logRoute from "./backstage/stystemLog.js";
import timelineRoute from "./backstage/timeLine.js";
import commentRoute from "./backstage/comment.js";
import orderRoute from "./backstage/order.js";
import stasticRoute from "./backstage/stasticPanel.js";
import userRoute from "./backstage/user.js";
import dynamicRoute from "./dynamicRoute/index.js";
const router = express.Router();

router.use("/icon", iconRoute);
router.use("/systemlog", logRoute);
router.use("/timeline", timelineRoute);
router.use("/comment", commentRoute);
router.use("/order", orderRoute);
router.use("/stastic", stasticRoute);
router.use("/", userRoute);
router.use("/", dynamicRoute);

export default router;
