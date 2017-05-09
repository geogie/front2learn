// process 属性, process 是一个全局变量，即 global 对象的属性。
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);

// 返回一个对象，成员为当前 shell 的环境变量
console.log(process.env);
