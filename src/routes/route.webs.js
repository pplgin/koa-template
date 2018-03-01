module.exports = [{
  url: '/',
  controller: 'home::index'
},{
  url: '/user/register',
  controller: 'user::register'
},{
  url: '/user/login',
  controller: 'user::login'
  middleware: (ctx, next)=> {
    console.log('log -midd');
    return next()
  },
  method: 'get'
}]