Function.prototype.myBind = function (context = window, ...args1) {
  let self = this;
  return function (...args2) {
    return self.apply(context, [...args1, ...args2])
  }
}




// 测试用例
let a = "123123123"
let obj = {
  a: "12",
  o: {
  }
}

function demo(...args) {
  console.log(this.a)
  console.log(args);
}

demo.myBind(obj, 123)(123)
