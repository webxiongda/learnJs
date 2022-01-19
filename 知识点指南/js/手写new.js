function myNew(fn, ...args) {
  let instance = Object.create(fn.prototype);
  let res = fn.apply(instance, args); // 改变this指向
  // 确保返回的是一个对象(万一fn不是构造函数)
  return typeof res === 'object' ? res : instance;
}

// 测试



function aa() {
  console.log(111)
}

aa()
