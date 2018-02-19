module.exports = [{
  url: '/',
  controller: 'home::index',
  middleware: (ctx, next)=> {
    console.log('log -midd');
    return next()
  },
  method: 'get'
}]