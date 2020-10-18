// map()

const arr = [1, 2, 3];

console.log('1: ', arr);


const newArr = [];

arr.forEach((elem) => {
  newArr.push(elem * 3) 
})

console.log('new arr: ', newArr);

// es 6:
// const updatedArr = arr.map(elem => {
//   return elem * 3;
// })

// es 6 - slim:
const updatedArr = arr.map(elem => elem * 3)

// es 5:
// const updatedArr = arr.map(function(elem){
//   return elem * 3
// })

console.log('updated: ', updatedArr);
console.log('original: ', arr);