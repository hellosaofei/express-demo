import express from "express";
const router = express.Router();

import iconRoute from "./backstage/icon.js";
import logRoute from "./backstage/stystemLog.js";
import timelineRoute from "./backstage/timeLine.js";
import commentRoute from "./backstage/comment.js";
import orderRoute from "./backstage/order.js";
import stasticRoute from "./backstage/stasticPanel.js";
// import userRoute from "./backstage/user.js";
import dynamicRoute from "./dynamicRoute/index.js";
import loginRoute from "./system/user.js";
import uploadRoute from "./jsRelated/fileUpload.js";

router.use("/icon", iconRoute);
router.use("/systemlog", logRoute);
router.use("/timeline", timelineRoute);
router.use("/comment", commentRoute);
router.use("/order", orderRoute);
router.use("/stastic", stasticRoute);
// router.use("/user", userRoute);
router.use("/", dynamicRoute);
router.use("/user", loginRoute);
router.use("/fileUpload", uploadRoute);

export default router;
