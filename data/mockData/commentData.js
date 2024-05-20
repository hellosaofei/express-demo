import Mock from "mockjs";
import { handleRandomImage } from "../../utils/index.js";

const commentList = [];
const count = 50;
for (let i = 0; i < count; i++) {
  commentList.push(
    Mock.mock({
      good_id: "@id()",
      good_name: "@csentence(5)",
      good_image: handleRandomImage(40, 40),
      "rate|1": [1, 2, 3, 4, 5],
      comment_content: "@cparagraph(1)",
      reply_content: "@cparagraph(1)",
      user_name: "@csentence(2,4)",
      user_ip: "@province()",
      "status|1": [1, 2], //已通过 未审核
      date: "@datetime()",
    })
  );
}

export { commentList, count };
