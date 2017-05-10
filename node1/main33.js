var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) { // 以读写模式打开文件。如果文件不存在抛出异常。
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");
});
