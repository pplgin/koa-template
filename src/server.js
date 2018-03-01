import Koa from 'koa'
import { PORT } from './config'
const app = new Koa();


// 加载路由配置
const middlewares = require('./middlewares')

app.use(middlewares)

app.listen(PORT, () => {
  console.log(`server is running at! http://0.0.0.0:${PORT}`);
})