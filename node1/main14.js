// Stream 流 异步
var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) { // 当有数据可读时触发。
   data += chunk;
   console.log("on-data-执行：",data);
});

readerStream.on('end',function(){ // 没有更多的数据可读时触发。
   console.log("on-end-执行：",data);
});

readerStream.on('error', function(err){ // 在接收和写入过程中发生错误时触发
   console.log("on-error-执行：",err.stack);
});

console.log("程序执行完毕");
