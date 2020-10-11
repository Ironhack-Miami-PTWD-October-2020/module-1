// 1. Create a function that accepts 3 numbers as parameters, and returns their sum.

function calculateSum(num1, num2, num3){
  return num1 + num2 + num3;
}

calculateSum(2, 4, 7);


// Create a function named isNameOddOrEven() that accepts a string as a parameter. The function should return whether a received name has an odd or even number of letters. The expected return should be in the following format - string: ‘<name> has an even/odd number of letters’.

function isNameOddOrEven(name){
// !name stands for name.length === 0 
  if(!name || typeof name !== 'string') return `Please enter a valid name!`;

  if(name.length % 2 === 0){
    return `${name} has even number of letters.`;
  } 

  return `${name} has odd number of letters`;
}

isNameOddOrEven('ana')