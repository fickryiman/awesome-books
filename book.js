import Book from './modules/bookClass.js';
import BookCRUD from './modules/bookCrudClass.js';
import Interface from './modules/interfaceClass.js';
import { onlyDisplayBook, onlyDisplayInputBook, onlyDisplayContact } from './modules/onlyDisplay.js';

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

document.querySelector('.list').addEventListener('click', onlyDisplayBook);
document.querySelector('.add').addEventListener('click', onlyDisplayInputBook);
document.querySelector('.contact').addEventListener('click', onlyDisplayContact);

window.onload = () => {
  onlyDisplayBook();
};
