/**
 * [exports 路由模板]
 * @type {Array}
 */
module.exports = [{
  url: '/api',
  controller: 'home::api'
}, {
  url: '/api/user/register',
  method: 'post',
  controller: 'user::post_register'
}, {
  url: '/api/user/login',
  method: 'post',
  controller: 'user::post_login'
}]