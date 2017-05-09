// Node.js GET/POST请求
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
// 请求看效果：http://127.0.0.1:3000/user?name=george&url=www.runoob.com
