class Home {
  index(ctx) {
    let _data = {
      test: 'hello world!'
    }
    return ctx.render('home', _data);
  }

  async api(ctx) {
    let _data = {
      test: 'Api!'
    }
    // return ctx.body = _data
    await ctx.render('home', _data);
  }
}

module.exports = new Home()