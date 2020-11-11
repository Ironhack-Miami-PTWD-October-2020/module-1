// FOLLOW THE SIMPLE ENGLISH LANGUAGE RULE:
// IF THE SELECTOR IS LOOKING FOR A SINGULAR, YOU WILL GET AN OBJECT. (getElementById ==> one ELEMENT)
// IN ANY OTHER CASE, YOU WILL GET SOME KIND OF A COLLECTION (getElementsByClassName ==> multiple ELEMENTS)

console.log('script.js connected');

// *******************************************************
// Getting the element by 'id'
// *******************************************************

const mainTitle = document.getElementById('title1');
console.log(mainTitle); // => <h1 id="title1">Primary title</h1>

// *******************************************************
// Getting the elements by 'class' => always returns an array (better saying HTML collection) (even if there is one element in it)
// *******************************************************

const paragraphs = document.getElementsByClassName('paragraph');
console.log(paragraphs); // => HTMLCollection(3) [p.paragraph, p.paragraph, p.paragraph]

// HTMLCollection is an array-like list of nodes.
// The HTMLCollection is an array-like object but is not an array; we can’t use the array methods like .forEach(), .map(), .push(), etc.

// TURN HTML COLLECTION INTO AN ARRAY

// 1:
// [...paragraphs].forEach(element => {
//   console.log(element);
// });

// 2:
const arrFromCollection = Array.from(paragraphs);
arrFromCollection.forEach(element => {
  console.log(element);
});

// *******************************************************
// Getting the elements by tag name => always returns an array (better saying HTML collection) (even if there is one element in it)
// *******************************************************

const theParagraphs = document.getElementsByTagName('p'); // gives HTMLCollection back; behaves almost as an array, but if we want to apply array methods we have to turn it into an array
console.log('----> ', theParagraphs[0]);

// *******************************************************
// Getting the element using '.querySelector()'  => returns an object - the first found match
// *******************************************************

const title2 = document.querySelector('#title2');
console.log(title2);

const firstParagraph = document.querySelector('.paragraph');
console.log(firstParagraph); // => <p class="paragraph">Here is some text in the first paragraph.</p>

const prodSubtitle = document.querySelector('.products h2');
console.log(prodSubtitle); // => <h2 class="title2" id="products">Products</h2>

// *******************************************************
// Getting all the elements using '.querySelectorAll()'  => returns a NodeList (array) of objects
// - all of them match the search query
// - array methods can be applied to them
// *******************************************************

const allParagraphs = document.querySelectorAll('p'); // gives NodeList back; behaves as an array
console.log('all paragraphs: ', allParagraphs);

allParagraphs.forEach(el => console.log(el));

console.log('------------------------------------------------------------');

// *******************************************************
// Accessing to the elements' attributes and the content
// *******************************************************

const textOfMainTitle = mainTitle.innerHTML;
console.log(textOfMainTitle); // => Primary title

// const obj = {
//   name: 'ana',
//   getName: function () {
//     console.log(this.name);
//   }
// };

mainTitle.style.color = 'red';
mainTitle.style.backgroundColor = 'pink';

mainTitle.style.border = '2px green dotted';
mainTitle.style.fontSize = '50px';

// *******************************************************
// Accessing and setting the node's properties
// *******************************************************

allParagraphs[0].id = 'par1';

allParagraphs.forEach(el => {
  el.style.color = 'tomato';
  el.style.fontStyle = 'italic';
});

console.log(prodSubtitle.className); // title2

// *******************************************************
// Manipulating the classes
// *******************************************************

// add one more class: 1
allParagraphs[1].className += ' cool-paragraph';

// 2
allParagraphs[2].classList.add('red-something');

// remove the class
allParagraphs[2].classList.remove('paragraph');

allParagraphs[2].classList.toggle('red-something');
