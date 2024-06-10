/**
 * 该文件用于存放验证用户登录、注册等操作的函数
 *
 */
import jwt from "jsonwebtoken";
import DefaultConfig from "../config/default.js";

/**
 * 判断用户名或密码是否为空
 */
export function isEmpty(username, password) {
  if (username.trim() == "" && password.trim() == "") {
    return true;
  }
  return false;
}

/**
 * 判断密码是否仅仅包含指定字符
 */
export function verifyForm(password) {
  const regex = /^[A-Za-z0-9_]+$/;
  return regex.test(password);
  // hello world        >>> false
}

/**
 * 指定用户名和密码的长度
 * username 2~14位
 * password 6~10位
 */
export function verifyLength(username, password) {
  if (2 <= username.length <= 14 && 6 <= password.length <= 10) {
    return true;
  }
  return false;
}

/**
 * 接下来的函数用于生成双token
 */

// 一个小时
const accessTokenTime = "10s";
// 三个小时
const RefreshTokenTime = "2m";

export function setAccessToken(payload = {}) {
  return jwt.sign(payload, DefaultConfig.PRIVATE_KEY, {
    expiresIn: accessTokenTime,
  });
}

export function setRefreshToken(payload = {}) {
  return jwt.sign(payload, DefaultConfig.PRIVATE_KEY, {
    expiresIn: RefreshTokenTime,
  });
}

/**
 * 用于验证token是否有效
 */
export function verifyToken(token = "") {
  // const res = jwt.verify(token, DefaultConfig.PRIVATE_KEY);
  // console.log(
  //   `正在进行token验证， 当前token为:${token}， 解码后的token 结果为：${res}`
  // );
  // if (!res) {
  //   return false;
  // }
  // return true;
  return jwt.verify(token, DefaultConfig.PRIVATE_KEY, function (err, decoded) {
    if (err) {
      console.error("JWT验证失败:", err);
      return false;
    } else {
      console.log("JWT验证成功:", decoded);
      return true;
    }
  });
}
