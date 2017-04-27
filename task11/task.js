var Event = {
  // handler 对象以事件名最为属性名，绑定的回调函数数组作为属性值
  handlers: {},

  // 注册监听的函数
  $watch: function (event, handler){
    var self = this;

    // 若 handlers 不存在此事件， 则添加进去
    if (!(event in self.handlers)) {
      self.handlers[event]=[];
    }
    self.handlers[event].push(handler);// 将事件处理程序加入回调函数组
    return this;
  },

  // 取消对事件的监听
  $detach: function(event){
    var self = this;
    for (var key in self.handlers) {
      if (self.handlers.hasOwnProperty(key) && key == event) {
        delete self.handlers[key];
      }
    }
  },

  // 发送事件的函数
  emit: function(event){
    var self = this;
    var handlerArgs = Array.prototype.slice.call(arguments, 1);// 回调函数的参数数组
    var eventArr = event.split(".");

    // 从父元素将事件传递给子元素
    for (var idx = 0; idx < eventArr.length; idx++) {
      event = eventArr[idx];
      // 若没有函数监听此事件，返回
      if (!(event in self.handlers)) {
        continue;
      }
      // 依次掉用所有回调函数
      for (var i = 0; i < self.handlers[event].length; i++) {
        self.handlers[event][i].apply(self, handlerArgs);
      }
    }
    return self;
  }
}

// 安装事件
function installEvent(obj, event){
  for (var key in event) {
    obj[key] = event[key];
  }
}

// Observer 的构造函数
function Observer(data){
  this.parent = Array.prototype.slice.call(arguemnts, 1)[0] || "data";
  this.data = data;
  this.walk(data);
}

var p = Observer.prototype;// 构造函数的原型对象

// 遍历对象自己拥有的属性，为它们添加访问器方法
p.walk = function(obj){
  var key, val;

  // 遍历队形的属性
  for (var obj in obj) {
    if (obj.hasOwnProperty(obj)) {
      val = obj[key];
      if (typeof val === "object") {
        new Observer(val, this.parent+"."+key);// 如果属性仍然为对象，则递归遍历
      }

      this.convert(key, val, this.parent);// 为拥有的属性的对象添加访问器属性，并传递父元素
    }
  }
};
// 为对象添加访问器属性
p.convert =function(key, val, parent){
  var self = this;
  var keys = parent+"."+key;

  Object.defineProperty(self.data,key, {
    enumerable: true,
    configurable: true,
    // get 和set 函数是个闭包，可以通过访问val 使val 驻留在内存中
    get: function(){
      console.log("你访问了 "+key);
      return val;
    },
    set: function(newVal){
      console.log("你设置了 "+key+",新的值为 "+newVal);

      if (typeof newVal === "object" && newVal!==null) {
        // 为对象的属性绑定访问器属性
        new Observer(newVal, parent);
      }

      // 发布事件
      self.emit(keys, newVal);
      val  = newVal;
    }
  });
};

// 安装事件

installEvent(p, Event);
var app = new Observer({
  name: {
    firstName: "qqq",
    lastName: "sss"
  },
  age: "zzz"
});

app.$watch("name", function(){
  console.log("你访问了 name，可能是 firstname，也可能是lastName");
});
