import loggerMiddleware from "./logger.js";

// 响应耗时中间件
async function timerMiddleware(req, res, next) {
  const start = Date.now();
  await next();
  const end = Date.now();
  const duration = end - start;
  res.set("X-Response-Time", duration + "ms");
}

export default {
  logger: loggerMiddleware,
  timer: timerMiddleware,
};
