import { logList, count } from "../../data/mockData/systemLogData.js";
import express from "express";

const router = express.Router();
router.post("/getList", (req, res) => {
  if (!req.body) {
    res.send({
      code: 200,
      msg: "success",
      totalCount: count,
      data: logList,
    });
  }
  const { title = "", pageNo = 1, pageSize = 20 } = req.body;
  //筛选title，用于搜索框进行title搜索
  let mockList = logList.filter((item) => {
    return !(title && item.title.indexOf(title) < 0);
  });
  //筛选index，用于更新页码
  const pageList = mockList.filter(
    (item, index) =>
      index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
  );
  res.send({
    code: 200,
    msg: "success",
    totalCount: count,
    data: pageList,
  });
});

export default router;
