// 将 Buffer 转换为 JSON 对象
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);
