// ************************************************************************************************
// ANONYMOUS FUNCTIONS
// ************************************************************************************************

// you already used examples of anonymous functions without knowing it: remember .forEach() method?
// let's see how it looks (prior to ES6):
const users = ['ana', 'maria'];

users.forEach(function (elem) {
  console.log(elem.toUpperCase());
});
// ANA, MARIA

// we are using no-named function inside this method someArray.forEach(function(elem){})
// this function will be used one time so no need to name it.
// if we would like to name it and then use it with the .forEach() method, we can do so (if it makes sense to name the fucntion):

function getUpperCased(name) {
  console.log(name.toUpperCase());
}

users.forEach(getUpperCased);

const products = ['iphone', 'book'];

products.forEach(getUpperCased);

// IPHONE, BOOK
