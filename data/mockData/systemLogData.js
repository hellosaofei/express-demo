import Mock from "mockjs";

const logList = [];
const count = 50;
for (let i = 0; i < count; i++) {
  logList.push(
    Mock.mock({
      log_id: "@id()",
      "log_type|1": ["数据库日志", "系统日志"],
      "log_role|1": ["admin", "editor", "test"],
      "log_result|1": ["操作成功", "操作失败", "登陆成功"],
      log_ip: "@ip()",
      date: "@datetime()",
    })
  );
}

export { logList, count };
