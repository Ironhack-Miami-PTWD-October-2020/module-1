// const evenOrOdd = (num) => {
//   return num % 2 ? "Odd" : "Even"
// }

// variables are not hoisted and are read in the order they are added going from top to bottom of the file.
// ei: you must declare a variable prior to using it or it will not be read.
const myNum = 6;

evenOrOdd(myNum);

// hoisting is like raising the flag on a pirate ship. Functions are hoisted to the top of the file and can be read no matter where you add them on the file

function evenOrOdd(num) {
  // console.log({num});
  if(num % 2) {
    return 'Odd';
  } else if (!(num % 2)) {
    return 'Even'
  } else {
    return 'No Number Was Given!'
  }
};


// Shadowing is when you are trying to reuse a variable name within the scope of the newly declared variable
const shadow = (myArray) => {
  // since myNum is already declared globally, this variable would considered a shadow of the globally scoped variable (try to avoid using shadow variable to avoid having issues later)
  myArray.forEach(myNum => {
    return myNum;
  })
}

const random = (elem) => {
  return Math.floor(Math.random() * Math.round(Math.random() * (elem * 10)));
}

const anotherRandom = (elem) => {
  return random(elem);
}

const asyncFunc = async (elem) => {
  const randomNum = await random(elem);

  console.log({randomNum});
  // console.log("><><><><><><", randomNum);
}

// when calling an api, this is a good way to utilize your async function in order to catch any errors that may occur on the api side.
// const asyncFunc = async (elem) => {
//   try {
//     const randomNum = await random(elem);

//     console.log({randomNum});
//     // console.log("><><><><><><", randomNum);
//   } catch(err) {
//     console.log({err});
//   }
// }

asyncFunc(7);



async function asyncFunc2() {

}

anotherRandom(5);

// these are examples of symbol meaning for js and most other programming languages.
// () = function;
// [] = array;
// {} = object;








// Example of OOP Math class floor method for javascript
// Math.floor(Math.random() * 6)

// class MyMath {
//   // constructor(num){
//   //   this.num = num;
//   // }
//   constructor() {

//   }


//   floor(aNumber) {
//     return aNumber.split('.')[0] 
//   }
// }