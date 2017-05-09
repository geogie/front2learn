// Process 属性
// 当进程准备退出时触发。
process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");// 好像偶尔会执行嫩，如果设置1s那就不会执行的概率大了
  }, 0);

  console.log('退出码为:', code);
});
console.log("程序执行结束");
