/**
 * description:前端更新日志
 * tagType
 * 0: bug处理 danger 红色
 * 1: 布局调整  info  白色
 * 2: 新增功能  success  绿色
 * 3: xxx  warning   黄色
 */

const timelineList_v1 = [
  {
    id: 2024043001,
    dateTime: "2024/04/30",
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
    id: 2024043002,
    dateTime: "2024/04/30",
    tagList: [
      {
        type: 0,
        content: "bug处理",
      },
    ],
    UpdateSummary: "项目故障调整",
    UpdateContent: "排查并解决以下问题：eharts模块无法正常显示、mock数据404",
  },
  {
    id: 2024043003,
    dateTime: "2024/04/30",
    tagList: [
      {
        type: 0,
        content: "bug处理",
      },
      {
        type: 2,
        content: "功能新增",
      },
    ],
    UpdateSummary: "更新左侧导航栏无法正常显示的问题",
    UpdateContent:
      "暂时弃用原项目封装的svg组件，图标全部改用elementUI组件库中的icon",
  },
  {
    id: 2024050101,
    dateTime: "2024/05/01",
    tagList: [
      {
        type: 1,
        content: "布局调整",
      },
    ],
    UpdateSummary: "布局微调",
    UpdateContent:
      "解决panination不居中的问题，尝试二次封装el-panination组件未能成功",
  },
  {
    id: 2024050201,
    dateTime: "2024/05/02",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 0,
        content: "bug处理",
      },
    ],
    UpdateSummary: "弃用mock-server",
    UpdateContent:
      "由于mock-server会重写浏览器的XMLHttpRequest对象，无法与后端发生真实的交互，使用express框架搭建后端服务",
  },
  {
    id: 2024050301,
    dateTime: "2024/05/03",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
    ],
    UpdateSummary: "新增【管理面板】页面",
    UpdateContent: "后台管理专项>>>  管理  >>> 管理面板",
  },
  {
    id: 2024050501,
    dateTime: "2024/05/05",
    tagList: [
      {
        type: 2,
        content: "路由鉴权",
      },
    ],
    UpdateSummary: "实现路由鉴权功能",
    UpdateContent:
      "使用vue全局路由守卫、结合vuex及Cookie实现简易的鉴权功能，但是后端尚未接入数据库",
  },
  {
    id: 2024050502,
    dateTime: "2024/05/05",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
    ],
    UpdateSummary: "新增pdf预览",
    UpdateContent:
      "业务相关  >>>  pdf预览，  使用iframe实现简易的pdf预览功能，界面不够美观，后期尝试使用pdf.js实现",
  },
  {
    id: 2024051001,
    dateTime: "2024/05/13",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 3,
        content: "原生Js",
      },
      {
        type: 3,
        content: "瀑布流",
      },
    ],
    UpdateSummary: "新增瀑布流布局",
    UpdateContent:
      "Css相关 >> 瀑布流布局，原生Js实现瀑布流， WaterFall组件维护一个columnHeight数组，用于记录每一个的高度，\
      每次渲染元素时，根据该数组中的最小元素值决定新元素插入哪一列，并通过 translate3d定位元素位置以实现渲染，\
      后续将通过虚拟列表进行优化",
  },
  {
    id: 2024051201,
    dateTime: "2024/05/12",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 2,
        content: "自定义指令",
      },
      {
        type: 2,
        content: "clipboard.js",
      },
    ],
    UpdateSummary: "新增剪贴板复制粘贴功能",
    UpdateContent:
      "js相关  >>>  复制粘贴, 主要新增了一个组件和一个全局指令， js-view/copy:定义了页面的内容，directive/Clipboard,\
      思路就是将v-clipboard挂载到一个button按钮上，然后分别通过arg传递一个数据和函数给自定义指令，点击按钮触发事件并完成数据复制",
  },
  {
    id: 2024051301,
    dateTime: "2024/05/13",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 3,
        content: "原生Js",
      },
    ],
    UpdateSummary: "新增列表拖拽排序",
    UpdateContent:
      "Js相关  >>>  列表拖拽，通过原生Js实现，主要借助了drag和drop API，主要思路是为列表DOM添加Listener，\
      并通过回调中的参数e.target来确定被拖拽的元素以及target元素",
  },
  {
    id: 2024051601,
    dateTime: "2024/05/16",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 3,
        content: "原生Js",
      },
    ],
    UpdateSummary: "新增放大镜功能",
    UpdateContent:
      "业务相关  >>>  放大镜 ，通过原生Js实现， 主要思路是为图片元素添加一个兄弟元素，设置其背景为图片，\
      并通过background-size设置放大倍数，通过获取鼠标的位置以及visiablity等方式控制放大镜的移动与显示",
  },
  {
    id: 2024051901,
    dateTime: "2024/05/19",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 2,
        content: "自定义指令",
      },
    ],
    UpdateSummary: "新增水印效果",
    UpdateContent:
      "其他  >>>  水印, 主要新增了一个组件和一个全局指令，other/WaterMark:定义了页面的内容，directive/WaterMark,\
      思路就是将v-directive挂载到一个DOM元素上后，为该元素添加一个兄弟元素并设置其背景图片为水印内容",
  },
  {
    id: 2024052001,
    dateTime: "2024/05/20",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 2,
        content: "vuex",
      },
    ],
    UpdateSummary: "新增右侧全局布局配置",
    UpdateContent:
      "进入系统后，屏幕右侧的悬浮按钮，主要新增了两个组件，components/RightPane：用于全局挂载悬浮按钮，\
      Layout/components/Setting:定义了全局布局配置都涉及了哪些内容",
  },
  {
    id: 2024052501,
    dateTime: "2024/05/25",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 3,
        content: "原生JS",
      },
      {
        type: 1,
        content: "轮播图",
      },
    ],
    UpdateSummary: "JS手写轮播图，无缝轮播",
    UpdateContent: "css相关 >> 轮播图",
  },
  {
    id: 2024053001,
    dateTime: "2024/05/30",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 2,
        content: "token",
      },
      {
        type: 2,
        content: "无感刷新",
      },
    ],
    UpdateSummary: "基于双token的无感刷新",
    UpdateContent:
      "用户登录后，后端下发refreshToken和accessToken两个token，有效期一长一短，前者负责刷新token，后者负责\
      业务逻辑请求。保存在vuex中。全局路由守卫监听后端返回的状态码，当状态码显示accessToken失效时，重新请求token\
      通过事件总线重新发起亲请求。",
  },
  {
    id: 20240616,
    dateTime: "2024/06/16",
    tagList: [
      {
        type: 2,
        content: "功能新增",
      },
      {
        type: 2,
        content: "大文件上传",
      },
      {
        type: 2,
        content: "jwt",
      },
    ],
    UpdateSummary: "新增大文件上传业务",
    UpdateContent: "JS相关 >> 文件上传",
  },
];

let count_v1 = timelineList_v1.length;
export { timelineList_v1, count_v1 };
