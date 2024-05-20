import Mock from "mockjs";
import { handleRandomImage } from "../../utils/index.js";

const orderList = [];
const count = 50;
for (let i = 0; i < count; i++) {
  orderList.push(
    Mock.mock({
      order_id: "@id()",
      order_image: handleRandomImage(300, 200),
      order_date: "@datetime()",
      order_number: "@guid()",
      order_alipay: "@guid()",
      "order_scene|1": ["京东", "淘宝", "拼多多", "咸鱼"],
      "order_status|1": [0, 1, 2], //支付成功 、未支付、退款中
      "order_money|1000-9000": 9000,
    })
  );
}

export { orderList, count };
