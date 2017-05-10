// 如果给定的参数 "object" 是一个数组返回true，否则返回false。
var util = require('util');
console.log("数组："+util.isArray([]))
  // true

  console.log(util.isArray(new Array))
  // true

console.log(util.isArray({}))
  // false

// 参数 "object" 是一个正则表达式返回true，否则返回false。
console.log("正则："+util.isRegExp(/some regexp/))
  // true

  console.log(util.isRegExp(new RegExp('another regexp')))
  // true

  console.log(util.isRegExp({}))
  // false

// 参数 "object" 是一个日期返回true，否则返回false。
console.log("日期："+util.isDate(new Date()))
  // true

  console.log(util.isDate(Date()))
  // false (without 'new' returns a String)

  console.log(util.isDate({}))
  // false

// 参数 "object" 是一个错误对象返回true，否则返回false。
console.log("错误："+util.isError(new Error()))
  // true

  console.log(util.isError(new TypeError()))
  // true

  console.log(util.isError({ name: 'Error', message: 'an error occurred' }))
  // false
