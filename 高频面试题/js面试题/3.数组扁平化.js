/**
 * 多维数组扁平化的四种方法
 */

{
  // 1.递归
  var arr = [[1, 2, 8, [6, 7]], 3, [3, 6, 9], 4];
  function flatten(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        newarr = newarr.concat(flatten(arr[i]));
      } else {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }

  console.log(flatten(arr));
}
{
  //2. es6...运算符
  let arr = [1, [2, [3, 4]]];

  function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
      arr = [].concat(...arr);
    } //ES6新方法
    return arr;
  }

  console.log(flatten(arr));
}

{
  //3. reduce方法
  const arr = [1, [2, [3, 4, { a: 1 }], null], undefined];
  function flatten(arr) {
    return arr.reduce((prev, next) => {
      return prev.concat(Array.isArray(next) ? flatten(next) : next);
    }, []);
  }
  console.log(flatten(arr));
}
