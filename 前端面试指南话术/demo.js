console.time('aaa')
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 10000; k++) {
    }
  }
}
console.timeEnd('aaa')



console.time('bbb')
for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 100; k++) {


    }
  }
}
console.timeEnd('bbb')
