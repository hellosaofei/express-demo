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
        // [
        //   [ { id: 2, username: '张三' } ],
        //   [
        //     `id` INT NOT NULL PRIMARY KEY UNIQUE_KEY AUTO_INCREMENT,
        //     `username` VARCHAR(45)
        //   ]
        // ]
        // field可能为空
        // ResultSetHeader {
        //   fieldCount: 0,
        //   affectedRows: 1,
        //   insertId: 3,
        //   info: '',
        //   serverStatus: 2,
        //   warningStatus: 0,
        //   changedRows: 0
        // }
        console.log("sql语句执行结果为", result, fields);
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
  // 尝试使用回调函数的方式再次封装上面的函数
  sqlExectorSync(sql, sqlArr = []) {
    /**
     * 此处回调函数写法的缺点初步显现
     */
    return this.connectPool.getConnection((err, conn) => {
      if (err instanceof Error) {
        console.log("从数据库连接池中取出连接实例时出现错误", err);
        return;
      }
      return conn.execute(sql, sqlArr, (err, result, fields) => {
        if (err instanceof Error) {
          console.log("执行sql时出现错误", err);
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
}

export default DBInstance;
