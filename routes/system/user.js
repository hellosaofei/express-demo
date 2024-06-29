import express from "express";
import { register, login, refresh } from "../../controllers/user.js";

const router = express.Router();
// 注册接口
router.post("/register", register);

// 登录接口
router.post("/login", login);

// 刷新 token
router.get("/refresh", refresh);
// 注销接口
router.post("/logout", (req, res) => {
  res.send({
    code: 2000,
    data: "success",
  });
});
export default router;
