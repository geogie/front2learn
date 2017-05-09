// 事件驱动程序
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter(); // 事件触发和监听

// 创建事件处理程序
var connectHandler = function connected() { // 3
   console.log('连接成功。');

   // 触发 data_received 事件
   eventEmitter.emit('data_received'); // 4
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler); // 2

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){ // 5
   console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection'); // 1

console.log("程序执行完毕。"); // 6

// 执行顺序：1-->6
