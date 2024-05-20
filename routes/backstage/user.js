import initRouter from "../initRoute.js";

// 用户使用用户名【admin】或【editor】进行登录时，
// 请求参数：用户名
// 返回值：下面的token值
const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

//用户查询用户信息时，
// 请求参数：上面返回的token值
// 返回值：用户的真实信息
const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Super Admin",
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor",
  },
};

initRouter.post("/user/login", (req, res) => {
  const { username } = req.body;
  const token = tokens[username];

  // 根据用户提交的用户名 找不到对应的token值
  if (!token) {
    res.send({
      code: 60204,
      message: "用户名或密码错误",
    });
  }

  res.send({
    code: 20000,
    data: token,
  });
});

initRouter.get("/user/info", (req, res) => {
  const { token } = req.query;
  const info = users[token];

  // 根据用户提交的token值找不到对应的用户信息
  if (!info) {
    res.send({
      code: 50008,
      message: "提交的token值不正确",
    });
  }

  res.send({
    code: 20000,
    data: info,
  });
});

// 用户退出，直接返回success
initRouter.post("/user/logout", (req, res) => {
  res.send({
    code: 20000,
    data: "success",
  });
});

export default initRouter;
