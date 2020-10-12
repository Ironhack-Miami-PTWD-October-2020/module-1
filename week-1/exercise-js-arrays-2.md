Use the given array and iterate over it:

- using `for` loop
- using `.forEach()` method and show the index of each element next to the element itself.

```javascript
const fruits = ['apple', 'plum', 'strawberries'];

for (const elemOfArr of fruits) {
  console.log(elemOfArr);
}

// apple
// plum
// strawberries

console.log('-----------------------------');

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// apple
// plum
// strawberries

console.log('-----------------------------');

// using .forEach() method and show the index of each element
// next to the element itself.

fruits.forEach(function (elem, index) {
  console.log(`${elem} ------> ${index}`);
});

// apple ------> 0
// plum ------> 1
// strawberries ------> 2

// fruits.forEach((elem, index) => console.log(`${elem} ------> ${index}`))
```
