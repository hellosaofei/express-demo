import { orderList, count } from "../../data/mockData/orderData.js";
import initRouter from "../initRoute.js";

initRouter.post("/order/getList", (req, res) => {
  if (!req.body) {
    res.send({
      code: 200,
      msg: "success",
      totalCount: count,
      data: orderList,
    });
  }
  const { title = "", pageNo = 1, pageSize = 20 } = req.body;
  //用于实现title搜索功能
  let mockList = orderList.filter((item) => {
    return !(title && item.title.indexOf(title) < 0);
  });
  //用于实现只展示指定页码的page
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

export default initRouter;
