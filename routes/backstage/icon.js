import { iconData, count } from "../../data/mockData/iconData.js";
import express from "express";

const router = express.Router();
router.get("/getList", (req, res) => {
  res.send({
    code: 200,
    msg: "success",
    totalCount: count,
    data: iconData,
  });
});

export default router;
