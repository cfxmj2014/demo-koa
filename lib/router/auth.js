const router = require('koa-router')();

router.post('/login', async (ctx, next) => {
  const name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';

  if (name === 'koa' && password === '1') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1><p><a href="/">Try again</a></p>`;
  }
});

export default router;