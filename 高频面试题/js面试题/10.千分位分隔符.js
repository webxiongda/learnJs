/**
 * 数字（考虑数字是否合法、正负号、小数点），字符串
 * foo(-1234567.9012)  =>  '-1,234,567.9012'
 */
function foo(num) {
  if (typeof num == "number") {
    num = num.toString();
  }
  // int:-1234567
  // small:9012
  var [int, small] = num.split(".");
  var intArr = int.split("");
  let i = intArr.length - 4;
  while (i > 0) {
    intArr.splice(i+1, 0, ",");
    i = i - 3;
  }
  var ans = intArr.join('');
  var result = ans.concat('.').concat(small);
  return result;
}

console.log(foo(-1234567.9012));
