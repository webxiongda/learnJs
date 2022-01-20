Function.prototype.myApply = function (context = window, ...args) {
  let key = Symbol("key")
  context[key] = this
  let result = context[key](args)
  delete context[key]
  return result
}


// 测试用例
let a = "123123123"
let obj = {
  a: "12",
  o: {
  }
}

function demo(args) {
  console.log(this.a)
  console.log(...args);
}

demo.myApply(obj, [123, 123, 123, 123])


