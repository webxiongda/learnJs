function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let res = fn.apply(obj, args)
  return typeof res == 'object' ? res : obj
}

function fn1() {
  console.log(111);
  return [1, 23, 4]
}
let a = myNew(fn1, 1213);
console.log(a);