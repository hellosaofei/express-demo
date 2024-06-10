import initRouter from "../initRoute.js";
// 导入前端项目更新日志数据
import {
  timelineList_v1,
  count_v1,
} from "../../data/realData/timeLineData_1.js";

// 导入后端项目更新日志数据
import {
  timelineList_v2,
  count_v2,
} from "../../data/realData/timeLineData_2.js";

// 导入accessToken鉴权中间件
import { auth } from "../../middleware/auth.js";

// 前端项目日志接口
initRouter.get("/v1/getList", auth, (req, res) => {
  res.json({
    code: 200,
    msg: "success",
    totalCount: count_v1,
    data: timelineList_v1,
  });
});

// 后端项目日志接口
initRouter.get("/v2/getList", (req, res) => {
  res.json({
    code: 200,
    msg: "success",
    totalCount: count_v2,
    data: timelineList_v2,
  });
});
export default initRouter;
