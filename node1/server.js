var http = require('http');
// 中文乱码，不能实时刷新
http.createServer(function (request, response) { // 创建服务器，接收数据、响应数据

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	// response.end('Hello World\n'); // 访问显示的数据
  response.end('Hello World 啦啦啦\n');
}).listen(8888); // 绑定8888端口

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
