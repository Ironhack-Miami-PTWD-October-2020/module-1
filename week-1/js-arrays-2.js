// ******************************************************************************************
// PART 2 (ITERATING OVER ARRAYS AND EMPHASIZING THE NEED TO MAKE A COPY OF AN ARRAY)
// ******************************************************************************************

const mixedArr = [3, 'fish', false, { name: 'ana' }, ['pen', 'paper']];

// for(let i = 0; i < mixedArr.length; i++){
//   console.log(mixedArr[i])
// }

mixedArr.forEach(function (elem) {
  console.log(elem);
});

// function printElement(elem){
//   console.log(elem)
// }

// mixedArr.forEach(printElement)

mixedArr.forEach(elem => console.log(elem));

// ******************************************************************************************

// to make a copy of an array, you can use
// .concat()

const fruits = ['banana', 'plum'];
const fruits1 = fruits.concat('apple');
console.log('original: ', fruits); // original:  [ 'banana', 'plum' ]
console.log('updated: ', fruits1); // updated:  [ 'banana', 'plum', 'apple' ]

// .slice()

const fruits2 = fruits.slice();
console.log('fruits2 - copy of fruit: ', fruits2); // fruits2 - copy of fruit:  [ 'banana', 'plum' ]
fruits2.push('pineapple');
console.log('fruits 2: ', fruits2); // fruits 2:  [ 'banana', 'plum', 'pineapple' ]

// spread operator

const originalArr = [1, 2, 3];
console.log('originalArr: ', originalArr);

const copyOfArr = [...originalArr, 4]; // originalArr:  [ 1, 2, 3 ]
console.log('copyOfArr: ', copyOfArr); // copyOfArr:  [ 1, 2, 3, 4 ]

// using spread to merge arrays

const array2 = [4, 5, 6];

const mergedArr = [...originalArr, ...array2];

console.log(mergedArr); // [ 1, 2, 3, 4, 5, 6 ]

// why we would make a copy of an array?
// - because we want to preserve the original array and keep its original state and make all the changes in the copied array
