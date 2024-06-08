import { stasticData } from "../../data/mockData/stasticPanel.js";
import initRouter from "../initRoute.js";

initRouter.get("/getList", (req, res) => {
  res.send({
    code: 200,
    msg: "success",
    data: stasticData,
  });
});

export default initRouter;
