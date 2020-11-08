// # OOP | Class and inheritance - check for understanding

// - Create a class `Rectangle` with:
//   - A property `width`
//   - A property `height`
//   - A method `constructor(width,height)`
//   - A method `calculatePerimeter()`
//   - A method `calculateArea()`

// - Create a class `Square` that __extends Rectangle__ add with:
//   - A property `side` (equals to the width and height)
//   - A method `constructor(side)`

class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  calculateArea() {
    return this.height * this.width;
  }
}

// --------------------------------------------
// the same as above but without OOP
// --------------------------------------------

// const r2 = {};
// r2.width = 6;
// r2.height = 7;

// r2.calculatePerimeter = function(){
//   return 2 * (this.width + this.height);
// }

// r2.calculateArea = function(){
//   return this.height * this.width;
// }

// --------------------------------------------
// the second way of doing it without OOP:
// --------------------------------------------

// const r2 = {
//   width: 6,
//   height: 7,

//   calculatePerimeter: function(){
//     return 2 * (this.width + this.height);
//   },

//   calculateArea: function(){
//     return this.height * this.width;
//   }
// }

// console.log(r2)

class Square extends Rectangle {
  constructor(side) {
    // this is the constructor of the child class
    super(side, side); // needs to match the parent's constructor
    // super(width, height); // but in the case of square width and the height are the same so we have to pass "side" two times
  }
}

const r1 = new Rectangle(6, 7);
console.log('Perimeter of r1 =', r1.calculatePerimeter()); // 26
console.log('Area of r1 =', r1.calculateArea()); // 42

const s1 = new Square(5);
console.log('Perimeter of s1 =', s1.calculatePerimeter()); // 20
console.log('Area of s1 =', s1.calculateArea()); // 25

const s2 = new Square(10);
console.log('Perimeter of s2 =', s2.calculatePerimeter()); // 40
console.log('Area of s2 =', s2.calculateArea()); // 100
