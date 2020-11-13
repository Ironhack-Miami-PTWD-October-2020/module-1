// 1: Get the node with the main title

const mainTitle = document.querySelector('h1');
console.log(mainTitle);

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

console.log(mainTitle.innerText);
// console.log(mainTitle.innerHTML);

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

const fruitItems = document.getElementsByClassName('fruit-item');
console.log(fruitItems);

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

const veggieItems = document.querySelectorAll('.veggies li');
// const list = [...veggieItems].map(elem => console.log(elem.innerHTML));

veggieItems.forEach(ele => console.log(ele.innerHTML));

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

const subtitle = document.querySelector('.list-veggies h2').innerHTML;
console.log(subtitle);

// const subTitleVeggie = document.querySelectorAll('h2')[1].innerHTML;
// console.log(subTitleVeggie);

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const subTitleFruit = document.querySelector('h2');
subTitleFruit.id = 'fruit-title';
// console.log(subTitleFruit.id);

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const bestFruits = document.querySelectorAll('.fruits li');
// console.log(bestFruits);

// bestFruits[0].className += ` best-fruit`;
// bestFruits[2].className += ` best-fruit`;

bestFruits.forEach((el, i) => {
  if (i === 0 || i === 2) {
    // el.className += ' best-fruit'
    el.classList.add('best-fruit');
  }

  console.log(el);
});

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const veggieList = document.querySelector('.veggies');
veggieList.classList.remove('veggies');
console.log(veggieList);

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

const veggieLove = document.querySelectorAll('.list-veggies ul li');
// veggieLove.forEach(el => (el.classList += ` veggie-love`));

veggieLove.forEach(el => el.classList.add('veggie-love'));

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

veggieLove.forEach(el => {
  if (el.innerHTML === 'Spinach') {
    el.classList.remove('veggie-item');
  }
});

// veggieLove[3].classList.remove('veggie-item');

// => ... <li class="veggie-love">Spinach</li>
