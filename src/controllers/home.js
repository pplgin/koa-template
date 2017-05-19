/**
 * 首页
 * @type {Object}
 */
module.exports = {
  index: async (ctx, tmpl) => {
    let _data = {
      test: 'hello world!'
    }
    await ctx.render(tmpl, _data);
  }
}