// 类的prototype为原型
// 实例的__proto__为原型

function myInstanceof(obj, class1) {
  let proto = obj.__proto__;
  while (true) {
    if (proto == null) return false;
    if (proto == class1.prototype) return true;
    proto = proto.__proto__;
  }
}

// 测试
let arr = []
console.log(myInstanceof(arr, Array));