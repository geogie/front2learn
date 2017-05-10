// 非阻塞代码实例
var fs = require("fs");

fs.readFile('input.txt', function (err, data) { // 读取文件
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
