var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() { // 6
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。'); // 7, 11
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);// 1 添加监听器

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2); // 2

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection'); // 3 返回指定监听器数量
console.log(eventListeners + " 个监听器监听连接事件。");// 4

// 处理 connection 事件
eventEmitter.emit('connection');// 5

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1); // 8 移除监听器
console.log("listener1 不再受监听。"); // 9

// 触发连接事件
eventEmitter.emit('connection'); // 10

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。"); // 12

console.log("程序执行完毕。"); // 13

// 执行顺序：1-->13
