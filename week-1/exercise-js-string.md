## Checking for understanding - String

1. Create variables with your _first name_, _last name_ and _age_.
2. Make the first letters of your first and last name capitalized.
3. Concatenate your first and last name to give your full name.
4. Use `console.log()` method to output the sentence with the following structure: `My name is _your-fullname_ and I am _____ years old.`

## Solution

```javascript
// 1
const firstName = 'ida';
const lastName = 'kronic';
const age = 34;

// 2

// let capsFirstName = firstName[0].toUpperCase() + firstName.substring(1);
const capsFirstName = firstName.charAt(0).toUpperCase() + firstName.substring(1);
console.log(capsFirstName); // Ida

const capsLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
console.log(capsLastName); // Kronic

// 3

const fullName = `${capsFirstName} ${capsLastName}`;
// const fullName = capsFirstName + ' ' + capsLastName;

console.log(fullName); // Ida Kronic

// 4
console.log(`My name is ${fullName} and I am ${age} years old.`);
```
