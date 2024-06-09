/**
 *
 */

import DBInstance from "../db/mysql.js";
import md5 from "md5";
import jwt from "jsonwebtoken";

const db = new DBInstance();

async function queryAllUser(req, res) {
  let sql = "select * from admin";
  const result = await db.sqlExector(sql, []);
  res.json(result);
}

function login(req, res) {
  let { username, password } = req.body;
  password = md5(password);

  const sql = `select * from user where username='${username}' and password='${password}'`;
}

async function register(req, res) {
  let { username, password } = req.body;
  password = md5(password);

  let sql = "INSERT INTO `user`(`username`, `password`) VALUES (?, ?)";

  const RepeatName = await queryUserByName(username);
  if (RepeatName.length == 0) {
    db.sqlExectorAsync(sql, [username, password]).then((result) => {
      console.log("注册sql语句的执行结果为：", result);
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
  return db.sqlExectorAsync(sql);
}

export { queryAllUser, register };
