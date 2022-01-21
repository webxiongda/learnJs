/**
 * 数组去重
 */

{
  // 1.ES6语法set
  let arr1 = [1, 1, 1, 2, 3, 6, 5, 5, 8, 7, 7, 7, 8];
  let arr2 = Array.from(new Set(arr1));
  console.log(arr2);
}
{
  // 2.indexof
  /**
   * 优点：该方法可以顾虑到重复的 String、Boolean、 Number、undefined、null，返回的是去重后的新数组。
   * 缺点：不能过滤掉 NaN、Object
   */
  let arr1 = [1, 1, 1, 2, 3, 6, 5, 5, 8, 7, 7, 7, 8];
  function removeDuplicates(arr){
    let newarr = [];
    for (let i=0;i<arr.length;i++){
      if(newarr.indexOf(arr[i]) == -1){
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }
  console.log('-----------------');
  console.log(removeDuplicates(arr1));
}
{
  // '1' !== 1 如果不希望字符串转成number，那就用key-value法
  var arr = [1, 2, 1, 1, '1', 3, 3];
  const unique = function(arr){
    let obj = {};
    let newArr = [];
    arr.forEach(item => {
      if(!obj[typeof item + item]){
        obj[typeof item + item] = true;
        newArr.push(item);
      }
    });
    return newArr;
  }
  console.log(unique(arr));
}