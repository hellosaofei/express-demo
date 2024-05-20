/**
 * description:后端更新日志
 * tagType
 * 0: bug处理 danger 红色
 * 1: xxxx  info  白色
 * 2: 新增功能  success  绿色
 * 3: xxx  warning   黄色
 */

const timelineList_v2 = [
  {
    id: 2024050201,
    dateTime: "2024/05/02",
    tagList: [
      {
        type: 2,
        content: "项目上线",
      },
    ],
    UpdateSummary: "首次上线该项目",
    UpdateContent: "无",
  },
  {
    id: 2024050301,
    dateTime: "2024/05/03",
    tagList: [
      {
        type: 2,
        content: "新增接口",
      },
    ],
    UpdateSummary: "搭建简易静态资源服务器",
    UpdateContent: "使用express内置中间件搭建简易静态资源服务器",
  },
];

let count_v2 = timelineList_v2.length;
export { timelineList_v2, count_v2 };
