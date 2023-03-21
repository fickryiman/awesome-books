// const myCollection = Object.assign(BooksCollection);

// if (localStorage.getItem('Books') === null) {
//   localStorage.setItem('Books', JSON.stringify(myCollection));
// }

const booksData = JSON.parse(localStorage.getItem('Books')) || [];
const bookContainer = document.querySelector('.book-container');
const formInputBook = document.querySelector('#form-add-book');
const inputBookTitle = document.querySelector('#book-title');
const inputBookAuthor = document.querySelector('#book-author');
const buttonRemove = document.querySelector('.book-remove');

renderBooks();

formInputBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = inputBookTitle.value;
  const author = inputBookAuthor.value;
  if (title && author) {
    addBook(title, author);
    renderBooks();
    formInputBook.reset();
  }
});

bookContainer.addEventListener('click', (e) => {
  if (e.target.matches('.buttonRemove')) {
    const bookIndex = e.target.dataset.index;
    removeBook(bookIndex);
    renderBooks();
  }
});

function addBook(title, author) {
  booksData.push({ title, author });
  localStorage.setItem('Books', JSON.stringify(booksData));
  renderBooks();
}

function removeBook(index) {
  booksData = booksData.filter((book, i) => i != index);
  localStorage.setItem('Books', JSON.stringify(booksData));
}


function renderBooks() {
  if (booksData) {
    booksData.map((book, i) => {
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
      buttonBookRemove.dataset.index = `${i}`;
      const hrBookSeparation = document.createElement('hr');
      divBook.appendChild(pBookTitle)
      divBook.appendChild(pBookAuthor);
      divBook.appendChild(pBookAuthor);
      divBook.appendChild(buttonBookRemove);
      divBook.appendChild(hrBookSeparation);
      bookContainer.appendChild(divBook);
    });
  }
};

// function addBook(book, author) {
  // const divBook = document.createElement('div');
  // divBook.className = 'book';
  // const pBookTitle = document.createElement('p');
  // pBookTitle.className = 'book-title';
  // pBookTitle.innerText = `Book Title: "${book.title}"`;
  // const pBookAuthor = document.createElement('p');
  // pBookAuthor.className = 'book-author';
  // pBookAuthor.innerText = `Book Author: "${book.author}"`;
  // const buttonBookRemove = document.createElement('button')
  // buttonBookRemove.className = 'book-remove';
  // buttonBookRemove.innerText = 'Remove';
  // buttonBookRemove.dataset.index = `${i}`;
  // const hrBookSeparation = document.createElement('hr');
  // divBook.appendChild(pBookTitle)
  // divBook.appendChild(pBookAuthor);
  // divBook.appendChild(pBookAuthor);
  // divBook.appendChild(buttonBookRemove);
  // divBook.appendChild(hrBookSeparation);
  // bookContainer.appendChild(divBook);
// };

// function renderBooks() {
//   booksData.forEach((bookData, index) => {
//     addBook(bookData, author);
//   });
// }


// function removeBook(datasetIndex) {
//   booksData = booksData.filter((bookData, index) => index != datasetIndex))
//   localStorage.setItem('booksData', JSON.stringify(booksData));
// }

// function addToLocalStorage() {
//   const localStorageObject = {};
//   localStorageObject.bookTitle = inputBookTitle.value;
//   localStorageObject.bookAuthor = inputBookAuthor.value;
//   localStorage.setItem('formInput', JSON.stringify(localStorageObject));
// }

// const addBook = document.querySelector('.add-book');

// function addBookInformation() {
//   const divBook = document.createElement('div');
//   divBook.className = 'book';
//   const pBookTitle = document.createElement('p');
//   pBookTitle.className = 'book-title';
//   pBookTitle.innerText = `Book Title: "${inputBookTitle.value}"`;
//   const pBookAuthor = document.createElement('p');
//   pBookAuthor.className = 'book-author';
//   pBookAuthor.innerText = `Book Author: "${inputBookAuthor.value}"`;
//   const buttonBookRemove = document.createElement('button');
//   buttonBookRemove.className = 'book-remove';
//   buttonBookRemove.innerText = 'Remove';
//   buttonBookRemove.setAttribute('onclick', 'removeBook(this)');
//   const hrBookSeparation = document.createElement('hr');
//   divBook.appendChild(pBookTitle)
//   divBook.appendChild(pBookAuthor);
//   divBook.appendChild(pBookAuthor);
//   divBook.appendChild(buttonBookRemove);
//   divBook.appendChild(hrBookSeparation);
//   bookContainer.appendChild(divBook);
// };
