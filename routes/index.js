import express from "express";

import iconRoute from "./backstage/icon.js";
import logRoute from "./backstage/stystemLog.js";
import timelineRoute from "./backstage/timeLine.js";
import commentRoute from "./backstage/comment.js";
import orderRoute from "./backstage/order.js";
import stasticRoute from "./backstage/stasticPanel.js";
import userRoute from "./backstage/user.js";

const router = express.Router();

router.use("/", iconRoute);
router.use("/", logRoute);
router.use("/", timelineRoute);
router.use("/", commentRoute);
router.use("/", orderRoute);
router.use("/", stasticRoute);
router.use("/", userRoute);

export default router;
