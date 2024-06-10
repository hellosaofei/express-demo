/**
 *
 */

import DBInstance from "../db/mysql.js";
import md5 from "md5";
import {
  verifyForm,
  verifyLength,
  isEmpty,
  setAccessToken,
  setRefreshToken,
  verifyToken,
} from "../utils/user.js";

const db = new DBInstance();

async function login(req, res) {
  let { username, password } = req.body;
  if (isEmpty(username, password)) {
    res.json({
      code: 3001,
      message: "用户名或密码为空",
    });
    return;
  }
  if (!verifyForm(password)) {
    res.json({
      code: 3002,
      message: "密码仅能包含a-z A-Z _ 0-9",
    });
    return;
  }
  if (!verifyLength(username, password)) {
    res.json({
      code: 3003,
      message: "username 2~14位 password 6~10位",
    });
    return;
  }
  password = md5(password);

  const sql = `select * from user where username='${username}' and password='${password}'`;

  const user = await db.queryExec(sql, [username, password]);
  if (!user || user.length == 0) {
    res.json({
      code: 3004,
      message: "用户名或密码错误",
    });
    return;
  }
  // 下发两个token
  // jwt.sign({username},DefaultConfig.PRIVATE_KEY,)

  res.json({
    code: 2000,
    message: "登录成功，Token下发成功",
    data: {
      accessToken: setAccessToken(),
      refreshToken: setRefreshToken(),
    },
  });

  // db.queryExec(sql, [username, password]).then((rows) => {
  //   if (!rows.length) {
  //     res.json({
  //       code: 3004,
  //       message: "用户名或密码错误",
  //     });
  //     return;
  //   }
  //   res.json({
  //     code: 2000,
  //     message: "登录成功",
  //   });
  // });
}

async function register(req, res) {
  let { username, password } = req.body;

  if (isEmpty(username, password)) {
    res.json({
      code: 3001,
      message: "用户名或密码为空",
    });
    return;
  }
  if (!verifyForm(password)) {
    res.json({
      code: 3002,
      message: "密码仅能包含a-z A-Z _ 0-9",
    });
    return;
  }
  if (!verifyLength(username, password)) {
    res.json({
      code: 3003,
      message: "username 2~14位 password 6~10位",
    });
    return;
  }
  password = md5(password);

  let sql = "INSERT INTO `user`(`username`, `password`) VALUES (?, ?)";

  const RepeatName = await queryUserByName(username);
  if (RepeatName.length == 0) {
    db.sqlExectorAsync(sql, [username, password]).then(() => {
      console.log("注册成功");
    });
    res.json({
      message: "用户注册成功",
      code: 2000,
    });
  } else {
    res.json({
      message: "用户名已经存在",
      code: 4001,
    });
  }
}

/**
 * 该函数用于短token刷新，
 */
async function refresh(req, res) {
  const refreshToken = req.get("RefreshToken");
  // 如果长token 无效，
  if (!verifyToken(refreshToken)) {
    res.json({
      code: 4001,
      message: "refreshToken无效，请重新登录",
    });

    return;
  }
  // 长token有效，长短token都重新下发
  console.log("token更新成功");
  res.json({
    code: 2000,
    message: "accessToken、refreshToken下发成功",
    data: {
      accessToken: setAccessToken({}),
      refreshToken: setRefreshToken({}),
    },
  });
}

/**
 * @description:该函数根据用户名查询数据库，看是否有同名用户，如果有就不能使用该用户名
 * @params:usrname 用户名
 * @return：promise
 */
function queryUserByName(username) {
  const sql = `select id,username from user where username='${username}'`;
  // const res = db.sqlExectorAsync(sql).then((result) => {
  //   console.log("查询得到的数组为：", result);
  //   // 查询得到的数组不为空，直接返回false
  //   if (result != []) {
  //     return false;
  //   }
  //   return true;
  // });
  // return res;
  return db.queryExec(sql);
}

export { register, login, refresh };
