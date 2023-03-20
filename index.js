const BooksCollection = [
  {
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
  },
  {
    title: 'Ulysses',
    author: 'James Joyce',
  },
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
];

const bookContainer = document.querySelector('.book-container');

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

function loadBooksInformation() {
  while (bookContainer.hasChildNodes()) {
    bookContainer.removeChild(bookContainer.firstChild);
  }

  BooksCollection.forEach((bookCollection) => {
    loadBook(bookCollection);
  });
}

window.onload = (event) => {
  loadBooksInformation();
}

function removeBook(element) {
  // console.log('remove button clicked');
  element.parentElement.remove();
}

const inputBookTitle = document.querySelector('#book-title');
const inputBookAuthor = document.querySelector('#book-author');

console.log(inputBookTitle);
console.log(inputBookAuthor);

function addToLocalStorage() {
  // const localStorageObject = {};
  // localStorageObject.bookTitle = inputBookTitle.value;
  // localStorageObject.bookAuthor = inputBookAuthor.value;
  // localStorage.setItem('formInput', JSON.stringify(localStorageObject));
  console.log('click add book button')
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
