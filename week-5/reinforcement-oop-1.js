// declaring objects:

// object literal
const product = {
  name: 'iphone',
  price: 799.99
};

// using a keyword "new"
const book = new Object();
book.title = "you don't know javascript";
// console.log(book);

const person = {
  // properties
  name: 'ana',
  age: 25,

  // methods
  greet: function () {
    console.log('Hello');
  },

  getName: function () {
    // console.log(this)
    console.log(`Person's name is: ${this.name}`);
  }
};

console.log(person.greet());
console.log(person.getName());
