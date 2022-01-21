/**
 * 深拷贝：
 * 1.JSON.parse(JSON.stringify()):
 *  JSON.parse(JSON.stringify())这个方法生成了一个新的空间，所以可以对具有引用数据类型的对象或数组中进行深拷贝。
 * 2.递归方法
 */
{
  //1.JSON.parse(JSON.stringify())
  let obj1 = {
    name: "conghuhu",
    hobby: ["run", "swim", "basketball"],
    age: 22,
  };
  let obj2 = JSON.parse(JSON.stringify(obj1));
  obj1.name = "bixiaopang";
  console.log(obj2.name);

  let obj3 = [1,2,3,'4565'];
  let obj4 = JSON.parse(JSON.stringify(obj3));
  obj3[0]=5;
  console.log(obj3)
}
{
  //2.递归
  function deepclone(obj) {
    let cloneObj = Array.isArray(obj) ? [] : {};
    if (typeof obj === "object" && obj !== null) {
      for (let item in obj) {
        if (typeof obj[item] === "object") {
          cloneObj[item] = deepclone(obj[item]);
        } else {
          cloneObj[item] = obj[item];
        }
      }
    }
    return cloneObj;
  }
  let obj1 = {
    name: "conghuhu",
    hobby: ["run", "swim", "basketball"],
    age: 22,
  };
  let obj2 = JSON.parse(JSON.stringify(obj1));
  obj1.name = "bixiaopang";
  console.log(obj2.name);
}
