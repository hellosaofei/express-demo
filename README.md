# 提交说明

```
refactor:重构代码
chore:零星的工作
feat:重大变化
fix:bug修复
develop:开发中
```

# 接口文档

## 公共中间件

**状态码**

- 5xxx
- 5001:请求中没有 accessToken
- 5002：accessToken 已经过期

## 用户相关

### /login

**接口说明**
用户登录接口

**请求参数**

- username: 用户名
- password: 密码

**状态码**

- 2000:返回成功
- **返回示例**

```js
{
    code:2000,
    message:"登录成功",
    data:{
        accessToken:"xxxx",
        refreshToken:"xxxx"
    }
}
```

### /register

**接口说明**
用户登录接口

**请求参数**

- username: 用户名
- password: 密码

**状态码**

- 2000:返回成功
- **返回示例**

```js
{
    code:2000,
    message:"注册成功",
}
```

### /refresh

**接口说明**
用于刷新 `accessToken`

**请求参数**

**状态码**

- 2000: 成功返回
- 3000：
- 4000：请求中没有 token

**返回示例**

```js
{
    code:2000,
    message:"token 获取成功",
    data:{
        accessToken:"xxxx",
        refreshToken:"xxxx"
    }
}
```

## 《后台管理专项》部分

### /order/getList

**请求方式**

- post

**接口说明**

- 《后台管理专项》>《管理》 >《订单管理》

**请求参数**

- title:''
  要搜索的内容

- pageNo:1
  分页页码

- pageSize:20
  每页评论数量

**状态码**

- 2000: 成功返回

**返回示例**

```js
{
    code: 200,
    msg: "success",
    totalCount: 10,
    data: [
        {
            "good_id": "120000202202202376",
            "good_name": "火么装书却。",
            "good_image": "https://picsum.photos/40/40?random=B2Fa8DF2-3Ab6-cc94-EaEe-5Ef7f575cE0E",
            "rate": 4,
            "comment_content": "动种军写联解西况广管被利具效但。",
            "reply_content": "华每率住省口积省边可七长去。",
            "user_name": "通林门。",
            "user_ip": "黑龙江省",
            "status": 1,
            "date": "1996-10-17 15:48:36"
        },
    ]
}
```

### /icon/getList

**请求方式**

- get

**接口说明**

- 《后台管理专项》> 《图标》

**请求参数**

- 无

**状态码**

- 2000: 成功返回

**返回示例**

```js
{

    code: 200,
    msg: "success",
    totalCount: 10,
    data: [
        {
            "platform-eleme",
            "eleme",
            "delete-solid",
            //...
        }
    ],
}
```

### /comment/getList

**请求方式**

- post
  **接口说明**
- 《后台管理专项》> 《管理》>《评论管理》

**请求参数**

- title
  要搜索的内容
- pageNo
  分页页码
- pageSize
  每页评论数量

**状态码**

- 2000: 成功返回

**返回示例**

```js
{
    code:2000,
    message:"token 获取成功",
    data:{
        accessToken:"xxxx",
        refreshToken:"xxxx"
    }
}
```

## 《更新日志》部分

### /timeline/v1/getList

**请求方式**
get
**接口说明**
前端项目更新日志

**请求参数**

- 无
  **状态码**

- 2000: 成功返回

**返回示例**

```js
{
    code:2000,
    message:"token 获取成功",
    data:{
        accessToken:"xxxx",
        refreshToken:"xxxx"
    }
}
```

### /timeline/v2/getList

**请求方式**
get
**接口说明**
后端项目更新日志

**请求参数**

- 无
  **状态码**

- 2000: 成功返回
  **返回示例**

```js
{
    code:2000,
    message:"token 获取成功",

}
```
