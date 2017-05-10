// 缓冲区裁剪
var buffer1 = new Buffer('runoob');
//  缓冲区长度
console.log("buffer length: " + buffer1.length);
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
