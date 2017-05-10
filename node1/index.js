// 开始：可执行文件
var server = require("./server2");
var router = require("./router");

server.start(router.route);
