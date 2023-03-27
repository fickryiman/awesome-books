import BookCRUD from './bookCrudClass.js';

/* eslint-disable no-unused-vars */
let Interface;

export default Interface = {
  renderBooks: () => {
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
  },
};