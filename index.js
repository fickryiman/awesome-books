import BooksCollectionStatic from 'BooksCollection';

// Selecting the book container
const bookContainer = document.querySelector('.book-container');

// Creating each single book with respective properties
function loadBook(book) {
  const divBook = document.createElement('div');
  divBook.className = 'book';
  const pBookTitle = document.createElement('p');
  pBookTitle.className = 'book-title';
  pBookTitle.innerText = `Book Title: "${book.title}"`;
  const pBookAuthor = document.createElement('p');
  pBookAuthor.className = 'book-author';
  pBookAuthor.innerText = `Book Author: "${book.author}"`;
  const buttonBookRemove = document.createElement('button')
  buttonBookRemove.className = 'book-remove';
  buttonBookRemove.innerText = 'Remove';
  buttonBookRemove.setAttribute('onclick', 'removeBook(this)');
  const hrBookSeparation = document.createElement('hr');
  divBook.appendChild(pBookTitle)
  divBook.appendChild(pBookAuthor);
  divBook.appendChild(pBookAuthor);
  divBook.appendChild(buttonBookRemove);
  divBook.appendChild(hrBookSeparation);
  bookContainer.appendChild(divBook);
};

// Creating the list for the books from the Parameterized Array
function loadBooksInformation() {
  while (bookContainer.hasChildNodes()) {
    bookContainer.removeChild(bookContainer.firstChild);
  }
  BooksCollectionStatic.forEach((bookCollection) => {
    loadBook(bookCollection);
  });
}

// Onload loading the Exisiting Book list
window.onload = (event) => {
  loadBooksInformation();
}

// Remove the Book from the web broswer and from the Initial Parametrized Book's Array
function removeBook(element) {
  // console.log('remove button clicked');
  element.parentElement.remove();
  BooksCollection = BooksCollection.slice(0, 3);
}

const inputBookTitle = document.querySelector('#book-title');
const inputBookAuthor = document.querySelector('#book-author');

console.log(inputBookTitle);
console.log(inputBookAuthor);

function addToLocalStorage() {
  const localStorageObject = {};
  localStorageObject.bookTitle = inputBookTitle.value;
  localStorageObject.bookAuthor = inputBookAuthor.value;
  localStorage.setItem('formInput', JSON.stringify(localStorageObject));
  // console.log('click add book button')
}

const addBook = document.querySelector('.add-book');

function addBookInformation() {
  const divBook = document.createElement('div');
  divBook.className = 'book';
  const pBookTitle = document.createElement('p');
  pBookTitle.className = 'book-title';
  pBookTitle.innerText = `Book Title: "${inputBookTitle.value}"`;
  const pBookAuthor = document.createElement('p');
  pBookAuthor.className = 'book-author';
  pBookAuthor.innerText = `Book Author: "${inputBookAuthor.value}"`;
  const buttonBookRemove = document.createElement('button');
  buttonBookRemove.className = 'book-remove';
  buttonBookRemove.innerText = 'Remove';
  buttonBookRemove.setAttribute('onclick', 'removeBook(this)');
  const hrBookSeparation = document.createElement('hr');
  divBook.appendChild(pBookTitle)
  divBook.appendChild(pBookAuthor);
  divBook.appendChild(pBookAuthor);
  divBook.appendChild(buttonBookRemove);
  divBook.appendChild(hrBookSeparation);
  bookContainer.appendChild(divBook);
};

addBook.addEventListener('click', (e) => {
  addToLocalStorage();
  addBookInformation();
  e.preventDefault();
});
