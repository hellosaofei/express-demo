import { stasticData } from "../../data/mockData/stasticPanel.js";
import express from "express";

const router = express.Router();
router.get("/getList", (req, res) => {
  res.send({
    code: 200,
    msg: "success",
    data: stasticData,
  });
});

export default router;
