// TODO: write the methods getAge, addJoke and getRandomJoke

const chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  jokes: [
    'Chuck Norris counted to infinity... Twice.',
    'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'
  ],
  displayInfo() {
    console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
  },
  getAge() {
    // TODO

    // option 1:
    // const todayDate = new Date();
    // this long number comes from   // 1000/60/60/24/365.25 -> milliseconds in a second/seconds in a minute/ minutes in an hour/ hours in a day/ days in a year (0.25 comes from leap year every 4 years)
    // const age = (todayDate - this.birthDate) * 3.17098e-11;
    // return Math.trunc(age);

    // option 2:
    return Math.floor((new Date() - this.birthDate) / 31536000000);
  },
  addJoke(joke) {
    this.jokes.push(joke);
  },
  getRandomJoke() {
    const rndmIndx = Math.floor(Math.random() * this.jokes.length);
    return this.jokes[rndmIndx];
  }
};

chuck.displayInfo();

console.log('getAge', chuck.getAge()); // Should return 80 if you are in 2020

chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();

// -------------------------------------------------------

// example of random index of an array
const arr = ['ana', 'josue', 'stefan'];

const randomIndex = Math.floor(Math.random() * arr.length);

console.log(arr[randomIndex]);
