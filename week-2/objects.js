// Objects

// const names = []; --> array

// key: value
const student = {
  firstName: 'sebastian',
  lastName: 'montoya',
  bootcamp: 'web dev',
  isCareerChanger: true,
  age: 24,
  favs: ['JavaScript', 'CSS']
};

console.log(student.firstName); // sebastian

console.log(student['bootcamp']); // web dev

// add
student.year = 2020;
console.log(student);

// {
//   firstName: 'sebastian',
//   lastName: 'montoya',
//   bootcamp: 'web dev',
//   isCareerChanger: true,
//   age: 24,
//   favs: [ 'JavaScript', 'CSS' ],
//   year: 2020
// }


// delete
delete student.age;

console.log(student);

// {
//   firstName: 'sebastian',
//   lastName: 'montoya',
//   bootcamp: 'web dev',
//   isCareerChanger: true,
//   favs: [ 'JavaScript', 'CSS' ],
//   year: 2020
// }

// update

student.isCareerChanger = false;

console.log(student.isCareerChanger); // false


// list the keys

const objKeys = Object.keys(student);

console.log(objKeys);
// [
//   'firstName',
//   'lastName',
//   'bootcamp',
//   'isCareerChanger',
//   'favs',
//   'year'
// ]

// list the values

const objValues = Object.values(student);

console.log(objValues);

// [
//   'sebastian',
//   'montoya',
//   'web dev',
//   false,
//   [ 'JavaScript', 'CSS' ],
//   2020
// ]

// for ... in 


for(const key in student){
  console.log(key)
}

// firstName
// lastName
// bootcamp
// isCareerChanger
// favs
// year

// check if some property exist in an Object
console.log('firstName' in student); // true

console.log('name' in student); // false