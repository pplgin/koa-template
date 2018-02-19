const Koa = require('koa');
const app = new Koa();


// 加载路由配置
const middlewares = require('./middlewares')

app.use(middlewares)


app.listen(3000, () => {
  console.log('server is running!');
})