// const book = new Object();

// const joshPerson = new Object();
// joshPerson.name = 'Josh';
// joshPerson.age = 24;

// const sandraPerson = new Object();
// joshPerson.name = 'Sandra';
// joshPerson.age = 35;

// console.log(joshPerson)

class Person {
  // theName, theAge, theCountry ==> placeholders/parameters
  constructor(theName, theAge, theCountry) {
    this.name = theName;
    this.age = theAge;
    this.country = theCountry;
    this.singHappyBirthday = sayHappyBirthday;
  }

  getAge() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

function sayHappyBirthday() {
  console.log(`Happy birthday, ${this.name}`);
}

console.log('=-=-=-=-=>>>> ', Person);

// class Blah {
//   constructor(age){
//     this.age = age;
//     this.birthday = sayHappyBirthday
//   }
// }

// sayHappyBirthday()

const josuePerson = new Person('Josue', 35, 'US');

console.log('-----> ', josuePerson);
josuePerson.getAge();

josuePerson.singHappyBirthday();

const sebastianPerson = new Person('sebastian', 25, 'US');
sebastianPerson.getAge();

sebastianPerson.singHappyBirthday();

class Student extends Person {
  constructor(nameX, ageX, countryX, course, favColor) {
    super(nameX, ageX, countryX);

    this.course = course;
    this.color = favColor;
  }

  graduate(numOfProjects) {
    if (numOfProjects >= 3)
      return { didGraduate: true, message: `${this.name} successfully graduated from ${this.course} course.` };
    else return { didGraduate: false, message: `${this.name} my friend, almost there!` };
  }
}

const stefanStudent = new Student('stefan', 29, 'montenegro', 'web dev', 'purple');

console.log(stefanStudent.graduate(3));

console.log(`Is Stefan instance of Person class? --> ${stefanStudent instanceof Person}`);
console.log(`Is Stefan instance of Student class? --> ${stefanStudent instanceof Student}`);

console.log(`Is Josue instance of Student class? --> ${josuePerson instanceof Student}`);
