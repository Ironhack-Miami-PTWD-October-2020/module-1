// const ironhacker = {
//     firstName: 'marko',
//     age: 39,
//     favorites: ['JavaScript', 'Node'],
//     isSatisfied: true,
//     worksAt: 'Google',
//     isRemote: false
// }
// // 1: Add 'React' as one more favorite tech
// // ... your code here

// ironhacker.favorites.push('React');

// // 2: Update ironhacker's age to 29
// // ... your code here

// ironhacker.age = 29;

// // 3: Remove the 'isRemote' property
// // ... your code here

// delete ironhacker.isRemote;

// // 4: Add a new property: 'didGraduate' and set it to a valid boolean value
// // ... your code here

// ironhacker.didGraduate = false;
// console.log(ironhacker);

// // 5: list all keys of the ironhacker object
// // ... your code here

// // const keys = Object.keys(ironhacker);
// // console.log(keys)

// for (const key in ironhacker){
//   console.log(key);
// }

// // 6: check if ironhacker has property 'worksAt'
// // ... your code here

// console.log('worksAt' in ironhacker); // true

// // for (const key in ironhacker){
// //   if (key === 'worksAt') console.log('it exists')
// //   else console.log('it doesnt')
// // }

const students = [
  {
    firstName: 'marko',
    age: 39,
    favorites: ['JavaScript', 'Node'],
    isSatisfied: true,
    worksAt: 'Google',
    isRemote: false
  },
  {
    firstName: 'michael',
    age: 22,
    favorites: ['JavaScript'],
    isSatisfied: false,
    worksAt: 'Facebook',
    isRemote: false
  },
  {
    firstName: 'ida',
    age: 39,
    favorites: ['Node', 'MongoDB'],
    isSatisfied: true,
    worksAt: 'Dropbox',
    isRemote: true
  }
];

console.log(students[2].firstName); // ida

console.log(students[0].worksAt); // Google
console.log('---------------');

for (let i = 0; i < students.length; i++) {
  console.log(students[i].firstName);
}

// arrays of arrays

const developers = [
  ['anna', 'sebastian'],
  ['christian', 'rachel'],
  ['sandra', 'stefan']
];

console.log(developers[1][1]); // rachel
console.log(developers[2][0]); // sandra

for (let i = 0; i < developers.length; i++) {
  console.log(developers[i][1]);
}

// objects with nested objects

const classroom = {
  teacher: {
    firstName: 'stefan',
    lastName: 'culafic',
    age: 29,
    address: {
      street: '123 Happy Street',
      city: 'Miami',
      state: 'Florida'
    }
  }
};

console.log(classroom.teacher.firstName); // stefan

console.log(classroom.teacher.address.city); // Miami
