import Koa from 'koa';

const app = new Koa();

const port = 5000;

// 处理post请求不提供解析request的body的功能
app.use(require('koa-bodyparser')());

// 开发环境log
app.use(require('koa-logger')());

// db
app.use(require('./db').default);

// view
require('./view').default(app);

// 路由
require('./router').default(app);

app.listen(port);

console.log(`listening on port ${port}...`);

export default app;