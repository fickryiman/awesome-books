// Declaring an object
const bookContainer = document.querySelector('.book-container');

//Checking local storage if undefined will creeate an empty array
let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];

// Get Document references to manupulate
const bookList = document.getElementById('book-list');
const addForm = document.getElementById('add-form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');

// Declaring Rendering of the Book List
renderBookList();

/* 
EVENT LISTENER ONE: add book SUBMIT
Add a new book to the collection when clicked submit 
- Confirm the title and Authour value exists
- Call the addBook Function to add book in BookCollection
- Call the renderBookList function to refresh the BookList
- Reset the Form for new book addition */
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    // Function to add title and author, refresh Booklist.
    addBook(title, author);
    renderBookList();
    addForm.reset();
  }
});

/* EVENT LISTENR TWO: click REMOVE
- Call the removeBook Function to rmove book from BookCollection
- Call the renderBookList function to refresh the BookList */
bookList.addEventListener('click', (e) => {
  if (e.target.matches('.rm-btn')) {
    const bookIndex = e.target.dataset.index;
    // A function to remove book
    removeBook(bookIndex);
    renderBookList();
  }
});

// Function to add a new book to the collection
// Refreshing the local Storage too with the updated BookCollection
function addBook(title, author) {
  bookCollection.push({ title, author });
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}

// Function to remove a book from the collection
// Refreshing the local Storage too with the updated BookCollection
function removeBook(index) {
  bookCollection = bookCollection.filter((book, ref) => ref != index);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}


// Function to render the book list
function renderBookList() {
  bookList.innerHTML = bookCollection
    .map(
      (book, ref) => 
      `
      <div class="bookslist-container">
        <li>
          ${book.title}
        </li>
        <li>
          ${book.author}
        </li>
        <button class='rm-btn' 
        id="remove-btn"
        data-index='${ref}'>Remove
        </button>        
        <hr class="book-separation">
      </div>
      
      `
    )
    .join("");
}

/*
        <li>
          ${book.title} by ${book.author}
          <button class='rm-btn' 
                  data-index='${ref}'>Remove
          </button>
        </li>
*/