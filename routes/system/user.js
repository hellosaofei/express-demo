import initRouter from "../initRoute.js";
import { register } from "../../controllers/user.js";
// 注册接口
initRouter.post("/register", register);

// // 登录接口
// initRouter.login("/login", () => {});

// 注销接口

// initRouter.get("/logout");

export default initRouter;
