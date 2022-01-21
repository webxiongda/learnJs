function Person(name, age) {
  this.name = name;
  this.age = age;
}
function newObject() {
  debugger
  // 定义空对象
  let obj = {};
  // 获取最前面的方法
  var Constructor = Array.prototype.shift.apply(arguments);
  // 让obj的原型指向构造函数的原型上
  obj.__proto__ = Constructor.prototype;
  // 执行  让方法上的this指向最开始创建的obj上
  let res = Constructor.apply(obj, arguments);
  // 
  return typeof res == "object" ? res : obj;
}

let o1 = newObject(Person, "liming", 22);
console.log(o1);
