/**
 * 单例模式：保证一个类只有一个实例，要提供一个能够访问到这个实例的入口
 */
{
  class Student {
    constructor(name) {
      this.name = name;
    }
    sayname() {
      console.log(this.name);
    }
  }

  Student.getInstance = function (name) {
    if (this.instance) return this.instance;
    return (this.instance = new Student(name));
  };

  let s1 = Student.getInstance("丛乎乎");
  console.log(s1);
  let s2 = Student.getInstance("毕小胖");
  console.log(s2);
  console.log(s1 === s2);
  // 但是这样创建对象感觉怪怪的，Student.getInstance
  // 我们希望创建对象通过new，往下看>>>
}
{
  //创建一个女朋友的单例
  let CreateGirlFriend = (function () {
    let instance = null;
    return class {
      constructor(name, age) {
        if (instance) return instance;
        this.name = name;
        this.age = age;
        return (instance = this);
      }
    };
  })();

  let g1 = new CreateGirlFriend("毕小胖", 21);
  let g2 = new CreateGirlFriend("丛乎乎", 22);
  console.log('---------------------------');
  console.log(g2);
  console.log(g1 === g2);

  // CreateGirlFriend有两个职责：1.创建女朋友 2.控制单例
  // 有一个渣男，需要多个女朋友，有一个老实人，只需要一个女朋友,往下看>>>
}

{
  // 能够创建很多女朋友的类，适合渣男
  class CreateGirlFirend {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  let getSingleClass = function (customClass) {
    let instance = null;
    return class {
      constructor() {
        if (instance) return instance;
        return (instance = new customClass(...arguments));
      }
    };
  };

  // let g1 = new CreateGirlFirend('小慧',18);
  // let g2 = new CreateGirlFirend('小芳',22);
  // console.log(g1 === g2);

  let CreateSingle = getSingleClass(CreateGirlFirend);
  let g1 = new CreateSingle('小慧',18);
  let g2 = new CreateSingle('小芳',22);
  console.log('---------------------------');
  console.log(g1 === g2);
}
