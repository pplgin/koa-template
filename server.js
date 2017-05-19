const http = require('http');

let app = require('./src/app.js');

const host = app.callback();

http.createServer(host).listen(3034 ,()=>{
  console.log('server is run at http://0.0.0.0:3034')
});