import express from "express";
// 路由管理
import Route from "./routes/index.js";

//项目配置文件
import defaultConfig from "./config/default.js";

// 中间件
import bodyParser from "body-parser";
import cors from "cors";
import middleware from "./middleware/index.js";

const app = express();
// 根据中间件处理逻辑，编排中间件的先后顺序
app.use(middleware.timer);
app.use(middleware.logger);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//搭建简易的静态资源服务器
app.use(express.static("public"));
// app.use('/public',express.static('public'))
// http://localhost:3000/public/images/bg.jpg

app.use("/", Route);

app.listen(defaultConfig.port, () => {
  console.log(`服务器开启:${defaultConfig.port}....`);
});
