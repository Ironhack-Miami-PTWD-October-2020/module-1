// ********************************************************************************************************
// FUNCTION DECLARATION, INVOKE A FUNCTION, NAMING A FUNCTION, PARAMETERS VS. ARGUMENTS, RETURN STATEMENT
// ********************************************************************************************************

// Naming conventions:
// - name should be very descriptive and should express what the function does.
// - try to use verbs that describe actions (ex. getUsers)
// - name functions the same as variables using the camelCase
// - use a lowercase letter to begin the name (lowerCase(){}, NOT LowerCase(){})

// create => function declaration

function printCoffeePrice() {
  console.log('Coffee price is 4.99');
}

// call => function invocation

printCoffeePrice();

function printJuicePrice() {
  console.log('Juice price is 7.49');
}

printJuicePrice();

// PARAMETER -> placeholder we use when we declare the function
// "product" we pass in the func declaration is a placeholder, it can be any word

// function printProductPrice(product){
//   console.log(`The price of the ${product} is 5`);
// }

function printProductPrice(product, price) {
  console.log(`The price of the ${product} is ${price}.`);
}

// when calling the function -> ARGUMENT (the real value)
printProductPrice('sandwich', 4.89);

printProductPrice('coffee', 1.99);

// RULE: Function ALWAYS returns something. If we don't say what, it will return undefined.

function printInfo(product, price) {
  return `The ${product} price is $${price}.`;
}

printInfo('milk', 2);

// -- multiple return statements --
function printName(name) {
  // if(name.length === 0)
  if (!name) {
    return `Please provide the name.`;
  }

  return `Welcome, ${name}!`;
}

printName('Val');

// -- return multiple values
// functions can’t, by default, return multiple values. To surpass this limitation,
// you can pack return values into an object or array and return it.

function getUser() {
  const firstName = 'christian';
  const lastName = 'garba';

  return {
    firstName,
    lastName
  };
}

const userInfo = getUser();

console.log(`${userInfo.firstName} ${userInfo.lastName} `); // christian garba
