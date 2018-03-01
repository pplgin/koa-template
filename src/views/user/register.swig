<html>
  <title>注册</title>
  <body>
    <form method="POST" action="/api/user/register">
      <legend>注册页面</legend>
      <input name="username" type="text" placeholder="输入用户名" />
      <input name="userpwd" type="password" placeholder="输入密码" />
      <input type="submit" value="点击注册">
    </form>
    <p>{{msg}}</p>
  </body>
</html>