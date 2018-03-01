import md5 from 'md5'
import { UserModel } from '../models/user'

class UserController {
  register(ctx) {
    return ctx.render('user/register')
  }

  async post_register(ctx) {
    const { username, userpwd } = ctx.request.body
    try {

      const user = new UserModel({
        username,
        id: 1,
        userpwd: md5(userpwd)
      })
      let res = await user.save()
      return ctx.render('user/register', {
        msg: 'register success!'
      })
    } catch(e) {
      // statements
      console.log(e);
      ctx.status = 500
      ctx.body = JSON.stringify(e)
    }
  }

  login(ctx) {
    return ctx.render('user/login')
  }

  post_login(ctx) {
    return ctx.render('user/login')
  }
}

module.exports = new UserController()