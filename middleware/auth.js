/**
 * 由于部分接口需要token，该文件存放一些鉴权的中间件函数
 *
 */
import jwt from "jsonwebtoken";
import DefaultConfig from "../config/default.js";

function auth(req, res, next) {
  const accessToken = req.get("AccessToken");
  // accessToken===undefined
  if (!accessToken) {
    res.json({
      code: 5001,
      message: "请求中没有token",
    });
    return;
  }
  // 如果请求对象中有 token ,尝试进行解构
  jwt.verify(accessToken, DefaultConfig.PRIVATE_KEY, (err, decoded) => {
    // 如果解构失败，说明 accessToken 已经过期
    if (err) {
      console.log("JWT验证失败， 可能因为accessToken已经过期");
      res.json({
        code: 5002,
        message: "accessToken已经过期",
      });
      return;
    }
    // 解构成功，说明 accessToken 还没有过期，直接往下走即可
    next();
    // decoded
  });
}

export { auth };
