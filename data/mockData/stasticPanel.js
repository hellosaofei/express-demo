import Mock from "mockjs";

let value_data = [];
let year_data = [];
for (let i = 0; i < 30; i++) {
  value_data.push(Mock.mock("@integer(60, 1000)"));
  year_data.push(Mock.mock('@date("yyyy/MM/dd")'));
}

const stasticData = {
  stastic_data: [
    {
      title: "订单数量(单)",
      value: 1600,
      up_rate: "24%",
      icon: "el-icon-help",
      iconClass: {
        color: "#4e88f3",
        "background-color": "rgba(78, 136, 243, 0.1)",
      },
    },
    {
      title: "销售额(元)",
      value: 48390,
      up_rate: "2%",
      icon: "el-icon-s-operation",
      iconClass: {
        color: "#4e88f3",
        "background-color": "rgba(78, 136, 243, 0.1)",
      },
    },
    {
      title: "退单数量(单)",
      value: 14,
      up_rate: "1%",
      icon: "el-icon-s-operation",
      iconClass: {
        color: "#4e88f3",
        "background-color": "rgba(78, 136, 243, 0.1)",
      },
    },
    {
      title: "退单总额(元 )",
      value: 233,
      up_rate: "32%",
      icon: "el-icon-s-marketing",
      iconClass: {
        color: "#4e88f3",
        "background-color": "rgba(78, 136, 243, 0.1)",
      },
    },
  ],
  chart_data: {
    value_data,
    year_data,
  },
};

export { stasticData };
