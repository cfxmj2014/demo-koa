import SQL from 'sql-template-strings';
const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  const data = await ctx.mysql.query(SQL`select * from course`);

  await ctx.render('index.html',{data});
});

export default router;