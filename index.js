// const myCollection = Object.assign(BooksCollection);

// if (localStorage.getItem('Books') === null) {
//   localStorage.setItem('Books', JSON.stringify(myCollection));
// }

let booksData = JSON.parse(localStorage.getItem('Books')) || [];
const bookContainer = document.querySelector('.book-container');
const formInputBook = document.querySelector('#form-add-book');
const inputBookTitle = document.querySelector('#book-title');
const inputBookAuthor = document.querySelector('#book-author');

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
  if (e.target.matches('.button-remove-book')) {
    const bookIndex = e.target.dataset.index;
    console.log(`bookIndex: ${bookIndex}`);
    removeBook(bookIndex);
    renderBooks();
  }
});

function addBook(title, author) {
  booksData.push({ title, author });
  localStorage.setItem('Books', JSON.stringify(booksData));
}

function removeBook(index) {
  booksData = booksData.filter((book, i) => i !== +index);
  localStorage.setItem('Books', JSON.stringify(booksData));
}


function renderBooks() {
  bookContainer.innerHTML = booksData.map((book, i) => `
                              <div class="book">
                                <p class="book-title">Book Title: ${book.title}</p>
                                <p class="book-author">Book Author: ${book.title}</p>
                                <button class="button-remove-book" data-index="${i}">Remove</button>
                                <hr class="book-separation">
                              </div>
                            `).join('');
};
