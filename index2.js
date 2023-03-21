
const bookContainer = document.querySelector('.book-container');

// Creating the list for the books from the Parameterized Array
// At first check if the local storage has  book collection  or not if not  create a new one.
let bookCollection = JSON.parse(localStorage.getItem("bookCollection")) || [];
 // Get Document references to manupulate
const addForm = document.getElementById("add-form");
const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const bookList = document.getElementById("book-list");
// function loadBooksInformation() {
//   while (bookContainer.hasChildNodes()) {
//     bookContainer.removeChild(bookContainer.firstChild);
//   }
//   BooksCollectionStatic.forEach((bookCollection) => {
//     loadBook(bookCollection);
//   });
// }
// Render Your  book list that you will generate below
renderBookList();
// Add a new book to the collection when clicked submit  and render the updated list
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    // a function to add title and author.
    addBook(title, author);
    renderBookList();
    addForm.reset();
  }
});
bookList.addEventListener("click", (e) => {
  if (e.target.matches(".rm-btn")) {
    const bookIndex = e.target.dataset.index;
    // A function to remove book
    removeBook(bookIndex);
    renderBookList();
  }
});
// Function to add a new book to the collection
function addBook(title, author) {
  bookCollection.push({ title, author });
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
}
// Function to remove a book from the collection
function removeBook(index) {
  bookCollection = bookCollection.filter((book, i) => i != index);
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
}
// Remove a book from the collection and render the updated list
// Function to render the book list
function renderBookList() {
  bookList.innerHTML = bookCollection
    .map(
      (book, i) => `
    <li>
      ${book.title} by ${book.author}
      <button class="rm-btn" data-index="${i}">Remove Book</button>
    </li>
  `
    )
    .join("");
}

