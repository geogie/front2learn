// 全局对象
// 输出全局变量 __filename 的值,当前执行脚本的文件名（目录/文件）
console.log( __filename );
// 输出全局变量 __dirname 的值，当前执行脚本的目录
console.log( __dirname );

function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);
