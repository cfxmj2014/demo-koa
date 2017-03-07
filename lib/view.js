import views from 'koa-views';
import nunjucks from 'nunjucks';
import path from 'path';
import staticServe from 'koa-static';

// 模板目录
const view_path = path.resolve(`${__dirname}/../static/html`);

// nunjucks配置
nunjucks.configure(view_path, {
  autoescape: true ,
  watch:true
});

export default (app) => {
  // 注册nunjucks模板
  app.use(views(view_path, {
    extension: 'html',
    cache: false,
    map: {html: 'nunjucks'}
  }));

  // 静态文件serve,管理静态文件请求
  app.use(staticServe(`${__dirname}/../dist`));
};
