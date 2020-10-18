// ***************************************************************
// 1: Capitalize each element of the array - the whole word:
// ***************************************************************

const fruits = ['pineapple', 'orange', 'mango'];

const capsFruits = fruits.map(elem => elem.toUpperCase());

// we can write it in one line:
// const capsFruits = fruits.map(oneFruit => oneFruit.toUpperCase())
//
console.log(`fruits: ${fruits}`); // fruits: pineapple,orange,mango
console.log(`capsFruits: ${capsFruits}`); // capsFruits: PINEAPPLE,ORANGE,MANGO

// ***************************************************************
// 2: Capitalize the first letter of every city. <br>
// _Bonus_: if the city has 2 or more words in the name, capitalize the first letter of each word.
// ***************************************************************

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const updatedArr2 = cities.map(city => {
  // look for an empty space - includes()
  if (city.includes(' ')) {
    // split by empty spot and target the second word
    const splittedArr = city.split(' ');
    // console.log(splittedArr);

    const newArr = splittedArr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1));
    return newArr.join(' ');
  }

  return city.charAt(0).toUpperCase() + city.substring(1);
  // return city[0].toUpperCase() + city.slice(1)
});

console.log(updatedArr2);
// [ 'Miami',
// 'Barcelona',
// 'Madrid',
// 'Amsterdam',
// 'Berlin',
// 'Sao Paulo',
// 'Lisbon',
// 'Mexico City',
// 'Paris' ]
