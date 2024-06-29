import DBConfig from "../config/db.js";
import mysql from "mysql2/promise";

class DBInstance {
  constructor() {
    this.connectPool = mysql.createPool(DBConfig);
  }
  /**
   * sql:要被执行的sql语句,需要为数据预留位置
   * sqlArr:执行sql语句时传入的数据
   */
  async sqlExectorAsync(sql, sqlArr = []) {
    const conn = await this.connectPool.getConnection();
    return conn
      .execute(sql, sqlArr)
      .then(([result, fields]) => {
        // sql语句执行结果为

        // console.log("sql语句执行结果为", result, fields);
        return result;
      })
      .catch((error) => {
        console.log("执行sql语句时出现错误，请查看错误内容");
        throw new Error(error);
      })
      .finally(() => {
        conn.release();
      });
  }

  /**
   * 尝试使用回调函数的方式再次封装上面的函数
   * */
  sqlExectorSync(sql, sqlArr = []) {
    // 此处回调函数写法的缺点初步显现

    return this.connectPool.getConnection((err, conn) => {
      if (err instanceof Error) {
        console.log("从数据库连接池中取出连接实例时出现错误");
        return;
      }
      return conn.execute(sql, sqlArr, (err, result, fields) => {
        if (err instanceof Error) {
          console.log("执行sql时出现错误");
          conn.release();
          return;
        }
        // 退出之前，先释放数据库连接
        conn.release();
        // 如果是查询语句，result变成rows，也就是查询到的一条条数据
        // 如果是增、删、改操作，result就是一个 ResultSetHeader 对象
        return result;
      });
    });
  }
  /**
   * 插入语句
   */
  async insertExec(sql, sqlArr = []) {
    const conn = await this.connectPool.getConnection();
    return new Promise((resolve, reject) => {
      conn
        .execute(sql, sqlArr)
        .then((result) => {
          // 执行插入语句后，返回的result结果是一个ResultSetHeader 对象，似乎不用返回
          console.log("执行查询sql语句的结果为：");
          resolve();
        })
        .catch((err) => {
          console.log("执行sql语句时出现错误，请查看原因");
          // 此处reject之后，后面调用该函数的函数就能使用const res=await 【函数】的方式或者
          // 【函数】.then().catch((err)=>{})捕获到错误
          reject(err);
        })
        .finally(() => {
          conn.release();
        });
    });
  }
  /**
   * 查询语句
   */
  async queryExec(sql, sqlArr = []) {
    const conn = await this.connectPool.getConnection();
    return new Promise((resolve, reject) => {
      conn
        .execute(sql, sqlArr)
        .then(([rows, fields]) => {
          console.log("执行查询sql语句的结果为：");
          resolve(rows);
        })
        .catch((err) => {
          console.log("执行sql语句时出现错误，请查看原因");
          // 此处reject之后，后面调用该函数的函数就能使用const res=await 【函数】的方式或者
          // 【函数】.then().catch((err)=>{})捕获到错误
          reject(err);
        })
        .finally(() => {
          conn.release();
        });
    });
  }
  /**
   * 更新语句
   */
  async updateExec(sql, sqlArr = []) {
    const conn = await this.connectPool.getConnection();
    return new Promise((resolve, reject) => {
      conn
        .execute(sql, sqlArr)
        .then((result) => {
          // 执行插入语句后，返回的result结果是一个ResultSetHeader 对象，似乎不用返回
          console.log("执行查询sql语句的结果为：");
          resolve();
        })
        .catch((err) => {
          console.log("执行sql语句时出现错误，请查看原因");
          // 此处reject之后，后面调用该函数的函数就能使用const res=await 【函数】的方式或者
          // 【函数】.then().catch((err)=>{})捕获到错误
          reject(err);
        })
        .finally(() => {
          conn.release();
        });
    });
  }
  /**
   * 删除语句
   */
  async deleteExec(sql, sqlArr = []) {
    const conn = await this.connectPool.getConnection();
    return new Promise((resolve, reject) => {
      conn
        .execute(sql, sqlArr)
        .then((result) => {
          // 执行插入语句后，返回的result结果是一个ResultSetHeader 对象，似乎不用返回
          // 只要不出错，就代表操作成功
          console.log("执行查询sql语句的结果为：");
          resolve();
        })
        .catch((err) => {
          console.log("执行sql语句时出现错误，请查看原因");
          // 此处reject之后，后面调用该函数的函数就能使用const res=await 【函数】的方式或者
          // 【函数】.then().catch((err)=>{})捕获到错误。目前似乎then调用好一点
          reject(err);
        })
        .finally(() => {
          conn.release();
        });
    });
  }
}

export default DBInstance;
