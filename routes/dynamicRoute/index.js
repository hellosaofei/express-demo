// import { iconData, count } from "../../data/mockData/iconData.js";
import { routeList } from "../../data/realData/routeData.js";

import initRouter from "../initRoute.js";

initRouter.get("/route/list", (req, res) => {
  res.send({
    code: 200,
    msg: "success",
    data: routeList,
  });
});

export default initRouter;
