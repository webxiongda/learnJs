var a = (function () {
  var num = 0
  var m1 = function () {
    console.log(num++)
  }
  var m2 = function () {
    console.log(num++);
  }
  return {
    m2: m2,
    m1: m1,
  }
})()