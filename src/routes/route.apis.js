/**
 * [exports 路由模板]
 * @type {Array}
 */
module.exports = [{
  url: '/api/user/register',
  method: 'post',
  controller: 'user::post_register'
}, {
  url: '/api/user/login',
  method: 'post',
  controller: 'home::api',
  template: 'home',
  middleware: [(ctx, next) => {
    console.log('log111 -midd');
    return next()
  },(ctx, next)=> {
    console.log('log222 -midd');
    return next()
  }],
  method: 'get'
}]