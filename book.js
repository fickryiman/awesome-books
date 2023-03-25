/* eslint max-classes-per-file: ["error", 3] */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCRUD {
  static readBook() {
    const booksCollection = localStorage.getItem('BOOKS') === null ? [] : JSON.parse(localStorage.getItem('BOOKS'));
    return booksCollection;
  }

  static createBook(book) {
    const booksCollection = BookCRUD.readBook();
    booksCollection.push(book);
    localStorage.setItem('BOOKS', JSON.stringify(booksCollection));
  }

  static removeBook(index) {
    let booksCollection = BookCRUD.readBook();
    booksCollection = booksCollection.filter((book, ref) => ref !== +index);
    localStorage.setItem('BOOKS', JSON.stringify(booksCollection));
  }
}

class Interface {
  static renderBooks() {
    const bookList = document.getElementById('book-list');
    const booksCollection = BookCRUD.readBook();
    bookList.innerHTML = booksCollection.map((book, ref) => (ref % 2 === 0 ? ` 
                            <div class="bookslist-container grey">
                              <div class="book-info">
                                <li>
                                  "${book.title}" by
                                </li>
                                <li>
                                  ${book.author}
                                </li>
                              </div>
                              <button class='rm-btn' 
                              id="remove-btn"
                              data-index='${ref}'>Remove
                              </button>        
                            </div>
                          ` : `
                            <div class="bookslist-container">
                              <div class="book-info">
                                <li>
                                  "${book.title}" by
                                </li>
                                <li>
                                  ${book.author}
                                </li>
                              </div>
                              <button class='rm-btn' 
                              id="remove-btn"
                              data-index='${ref}'>Remove
                              </button>        
                            </div>
                          `)).join('');
  }
}

document.addEventListener('DOMContentLoaded', Interface.renderBooks);

const addForm = document.getElementById('add-form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  if (title && author) {
    BookCRUD.createBook(book);
    Interface.renderBooks();
    addForm.reset();
  }
});

const bookList = document.getElementById('book-list');

bookList.addEventListener('click', (e) => {
  if (e.target.matches('.rm-btn')) {
    const bookIndex = e.target.dataset.index;
    BookCRUD.removeBook(bookIndex);
    Interface.renderBooks();
  }
});

const dt = new Date();
document.getElementById('datetime').innerHTML = dt;

function onlyDisplayBook() {
  document.getElementById('display-books').style.display = 'unset';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('input-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

/* eslint-disable no-unused-vars */
function onlyDisplayInputBook() {
  document.getElementById('input-book').style.display = 'unset';
  document.getElementById('display-books').style.display = 'none';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

/* eslint-disable no-unused-vars */
function onlyDisplayContact() {
  document.getElementById('contact').style.display = 'unset';
  document.getElementById('display-books').style.display = 'none';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('input-book').style.display = 'none';
}

window.onload = () => {
  onlyDisplayBook();
};
