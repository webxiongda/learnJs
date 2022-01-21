{
  // 手写promise.all
  Promise.myAll = function (promiseArr) {
    return new Promise((resolve, reject) => {
      let result = [];
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            result[i] = res;
            if (i === promiseArr.length - 1) {
              return resolve(result);
            }
          },
          (reasons) => {
            return reject(reasons);
          }
        );
      }
    });
  };

  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 is OK!");
    }, 1000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 is OK!");
    }, 2000);
  });
  console.time("cost");
  Promise.myAll([p1, p2]).then((res) => {
    console.log(res);
    console.timeEnd("cost");
  });
}
{
  // 手写promise.race    
  Promise.myRace = function (promiseArr) {
    return new Promise((resolve, reject) => {
      promiseArr.forEach((item) => {
        Promise.resolve(item).then(
          (res) => {
            return resolve(res);
          },
          (reasons) => {
            return reject(reasons);
          }
        );
      });
    });
  };
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 is OK!");
    }, 3000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 is OK!");
    }, 1000);
  });
  console.time("cost2");
  Promise.myRace([p1, p2]).then((res) => {
    console.log(res, 1111);
    console.timeEnd("cost2");
  });



}


{
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success1111111111111111111111')
    }, 1000)
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('failed1111111111111')
    }, 500)
  })

  Promise.race([p1, p2]).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)  // 打开的是 'failed'
  })
}