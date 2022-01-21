/**
 * Object.create()返回了一个新的空对象，并且这个空对象的构造函数的原型（prototype）是指向obj的
 */
_create = function (obj) {
  let F = function () {};
  F.prototype = obj;
  return new F();
};

let obj1 = {
  name: "小芳",
  age: 18,
};

let obj2 = obj1;
obj2.age = 22;
console.log(obj2);
console.log(obj1);
console.log("------------------------");

let obj3 = _create(obj1);
obj3.age = 25;
console.log(obj3);
console.log(obj1);
console.log('------------------------');

let obj4 = Object.create(obj1);
console.log(obj4)
