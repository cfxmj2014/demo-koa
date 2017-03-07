import auth from './auth';
// 使用home作为router，因为home中的get('/')，如果外层还有router的话，导致get('/')拦截了所有请求
import router from './home';
import hello from './hello';

[auth, hello].map((item) => {
  router.use(item.routes(), item.allowedMethods());
});

export default (app) => {
  app.use(router.routes(), router.allowedMethods());
};