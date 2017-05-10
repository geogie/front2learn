// 阻塞代码实例,中文没有乱码
var fs = require("fs"); // 文件读写

var data = fs.readFileSync('input.txt');// 读文件

console.log(data.toString());
console.log("程序执行结束!");
