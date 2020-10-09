// ************************************
// ************ BOOLEAN ***************
// ************************************

// == compares just using value (loose or abstract equality)

let x = 5;
let y = '5';
console.log(`What is this: ${x == y}`); // What is this: true

// === compares using value and type (strict equality)

console.log(`What is this: ${x === y}`); // What is this: false

// falsy values - will evaluate as FALSE
// - false
// - 0
// - "" empty string
// - null
// - undefined
// NaN

// truthy values - will evaluate as TRUE
// true
// "0"
// "false"
// [] or {}
// 35 (any number)
// new Date()

if ('false') `Passed thingy is truthy`;
else `Passed thingy is falsy`; // => 'Passed thingy is truthy'
// true && true
// true && false
// !true
if (true || false) {
  console.log('sooo true');
} else {
  console.log('maybe not so true');
}
