console.log('script.js connected');

// add, update and remove attributes

const paragraphNode = document.querySelector('#paragraph');

// console.log(paragraphNode.id);

const parId = paragraphNode.getAttribute('id');
console.log('--->', parId);

paragraphNode.setAttribute('id', 'info-paragraph');

paragraphNode.setAttribute('class', 'paragraphs');

paragraphNode.removeAttribute('id');

// add, update and remove dom elements

// add --> create an element
const mainTitle = document.createElement('h1');

mainTitle.innerHTML = 'This is the main title';

const parent = document.querySelector('body');
parent.appendChild(mainTitle);

// insert before

const sibling = document.querySelector('p');
parent.insertBefore(mainTitle, sibling);

// update

const link = document.getElementById('google-link');
link.innerHTML = 'Go to Google!';
link.setAttribute('href', 'https://www.google.com/');
link.setAttribute('target', '_blank');

// remove
parent.removeChild(paragraphNode);

// assign events to dom elements
const addCommentButton = document.querySelector('#add-comment-button');

addCommentButton.addEventListener('click', () => {
  //   console.log('clicked on the comment button');

  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = 'this is some very funny comment ha ha ha';
  parent.appendChild(newParagraph);
});

// addCommentButton.onclick = () => console.log('clicked on the comment button too');

// handle inputs (and forms)

const newItemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const deleteButtons = document.querySelectorAll('.delete-item-button');

addItemButton.addEventListener('click', () => {
  const listParent = document.getElementById('item-list');

  const newListItem = document.createElement('li');
  console.log(newItemInput.value);
  newListItem.innerHTML = `${newItemInput.value} <button class="delete-item-button">🗑</button>`;

  listParent.appendChild(newListItem);

  console.log(listParent.children);
  const newDeleteButton = newListItem.querySelector('.delete-item-button');

  deleteListItem(newDeleteButton);

  newItemInput.value = '';
});

function deleteListItem(buttonUserClickedOn) {
  buttonUserClickedOn.addEventListener('click', () => {
    const parentLiTag = buttonUserClickedOn.parentElement;
    parentLiTag.remove();
  });
}

deleteButtons.forEach(deleteListItem);
