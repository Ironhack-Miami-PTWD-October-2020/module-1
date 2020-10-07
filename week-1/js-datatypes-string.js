let bootcamp = 'web dev';

bootcamp = 'ux';

bootcamp = `data analytics`;

console.log(typeof bootcamp);

price = 3;
console.log(typeof price); // ==> number

const car = 'audi';
console.log('this is: ', car);

let student = 'ida';
console.log(`${student} has ${22 + 11} years`);
console.log(student + ' has ' + (22 + 11) + ' years');

console.log(`${student.toUpperCase()}`);

const str = 'this is our test string';

// console.log(`This is the first letter: ${str[0]}`);
// the same as above ^^^^
// console.log("This is the first letter:", str[0]);
// the same as above ^^^^
// console.log("This is the first letter:" + str[0]);

str[0] = 'T';
console.log(str); // ==> this is our test string
// Strings are immutable

let num = 3;

console.log(typeof num); // ==> number

num += 12;
console.log(num); // ==> 15

num = '3';
console.log(typeof num); // ==> string

num += 12;
console.log(num); // 312

// length is not a method, it is a property so it doesn't have () in the end
console.log(`How long is this string: ${str.length}`); // 23

// STRING METHODS

// ✅ check if string includes substring or character:
// includes() ===> returns true or false
// indexOf() ===> returns the position where character is found or -1 if not found

console.log('does it include: ', str.includes('string')); // true

console.log('where it is in the string or there is not at all: ', str.indexOf('str ')); // -1 (false)
console.log('where it is in the string or there is not at all: ', str.indexOf('str')); // 17 (it is on the 17th spot)
