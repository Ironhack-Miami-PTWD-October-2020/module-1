// ******************************************************************************************
// PART 1 (DECLARATION, INDEX, ADD, REMOVE)
// ******************************************************************************************

// examples of arrays

const animals = ['dog', 'cat', 'fish'];
const mixedArr = [3, 'fish', false, { name: 'ana' }, ['pen', 'paper']];

// zero indexed

const firstElem = animals[0];
console.log(firstElem);

// length

console.log(`The number of elements in array: ${mixedArr.length}`); // 5

// add elements to the array

// .push() --> adds to the end
// .unshift() --> adds to the beginning
// .splice(index, 0, 'which element we want to add')
// all methods mutate the original array

animals.push('tiger');
console.log(animals); // [ 'dog', 'cat', 'fish', 'tiger' ]

animals.unshift('monkey');
console.log(animals); // [ 'monkey', 'dog', 'cat', 'fish', 'tiger' ]

animals.splice(2, 0, 'horse');
console.log(animals); // [ 'monkey', 'dog', 'horse', 'cat', 'fish', 'tiger' ]

// add some and delete some

animals.splice(3, 2, 'lion');
console.log(animals); // [ 'monkey', 'dog', 'horse', 'lion', 'tiger' ]

// remove elements from array
// .pop() --> removes the last element
// .shift() --> removes the first element
// .splice(index, howMany) --> removes from the stated index number of stated elements, including the one on the index

animals.pop();
console.log(animals); // [ 'monkey', 'dog', 'horse', 'lion' ]

animals.shift();
console.log(animals); // [ 'dog', 'horse', 'lion' ]

animals.splice(1, 1);
console.log(animals); // [ 'dog', 'lion' ]
