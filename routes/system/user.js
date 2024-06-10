import initRouter from "../initRoute.js";
import { register, login, refresh } from "../../controllers/user.js";
// 注册接口
initRouter.post("/register", register);

// 登录接口
initRouter.post("/login111", login);

// 刷新 token
initRouter.get("/refresh", refresh);
// 注销接口

// initRouter.get("/logout");

export default initRouter;
