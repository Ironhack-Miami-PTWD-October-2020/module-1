1. Count from 1 to 50. If number is divisible by `5`, it should output `IRON`, and if number is divisible by `7` it should output `HACK`. If number is divisible by `5` and `7`, it should output `IRONHACK`. In any other case, it should output number.

```javascript
// 1

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 7 === 0) console.log('ironhack');
  // or: if(i % 35 === 0){/* code here */}
  else if (i % 5 === 0) console.log('iron');
  else if (i % 7 === 0) console.log('hack');
  else console.log(i);
}
```

2. Use `for...of`:

- Given the iterable `let str='hello,dear.friend! nice,to.see you!'`, replace each dot and comma with space. The final output should be: `hello dear friend! nice to see you!`.

```javascript
// 2: Use any loop. Given the iterable let str='hello,dear.friend! nice,to.see you!',
// replace each dot and comma with space. The final output should be: hello dear friend! nice to see you!.

let str = 'hello,dear.friend! nice,to.see you!';

// version 1:
let newStr = '';
for (let char of str) {
  if (char === '.' || char === ',') {
    char = ' ';
  }
  newStr += char;
}
console.log(newStr); // hello dear friend! nice to see you!

console.log('----------------------------------------------------');

// version 2:
let stringy = '';
for (let i = 0; i < str.length; i++) {
  if (str[i] === '.' || str[i] === ',') {
    stringy += ' ';
  } else {
    stringy += str[i];
  }
}
console.log(stringy); // hello dear friend! nice to see you!

console.log('----------------------------------------------------');
```
