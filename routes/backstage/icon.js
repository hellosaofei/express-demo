import { iconData, count } from "../../data/mockData/iconData.js";
import initRouter from "../initRoute.js";

initRouter.get("/icon/getList", (req, res) => {
  res.send({
    code: 200,
    msg: "success",
    totalCount: count,
    data: iconData,
  });
});

export default initRouter;
