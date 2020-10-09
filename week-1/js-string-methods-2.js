const str = 'this is our test string';

// ✅ access character in the string charAt(index)

console.log(str.charAt(0)); // t

// ‼️ string methods never mutate the string
// substring(start, end)
// substr(start, howManyFromStart)
// slice(start, end) and can accept negative numbers (counts from the last index)

let useSubstring0 = str.substring(5, 10); // we count from 0
console.log(useSubstring0); // is ou ==> the last is not included, meaning the "end" is not inclusive

let useSubstring = str.substring(5, 11);
console.log(useSubstring); // is our

let useSubstring1 = str.substring(-11, 5); // negative number is zero for substring(), so this is the same as (0, 5)

console.log(`hello: ${useSubstring1}`); // as if starts with zero ==> hello: this

let useSubstring2 = str.substring(5); // from this position all the way till the end of the string if we don't pass the end value
console.log(`What if we pass only start to substring: ${useSubstring2}`); // What if we pass only start to substring: is our test

let useSubstr = str.substr(5, 11);
console.log(useSubstr); // is our test

let useSubstr = str.substr(5, 9);
console.log(useSubstr); // is our te
let useSliceWithNegative = str.slice(-4);
console.log(useSliceWithNegative); // ring

// **************************************************
// - substring's parameters are reversible, as it will always use its smallest parameter value as the start index and largest value as the stop index.
// - substring will treat a negative start index as 0.
// - slice extracts from the end of the string if the starting index is negative.
// **************************************************

// startsWith() method - determines whether a string begins with the characters of a specified string,
// returns true or false as appropriate

const str1 = 'To be, or not to be, that is the question.';

console.log(str1.startsWith('To be')); // true
console.log(str1.startsWith('not to be')); // false
console.log(str1.startsWith('not to be', 10)); // true

// ************************************************************

// endsWith() method - determines whether a string ends with the characters of a specified string
// returns true or false as appropriate. It’s also case-sensitive.

console.log(str1.endsWith('question.')); // true
console.log(str1.endsWith('to be')); // false
console.log(str1.endsWith('to be', 19)); // true
