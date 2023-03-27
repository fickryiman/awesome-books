const BookCRUD = {
  readBook: () => {
    const booksCollection = localStorage.getItem('BOOKS') === null ? [] : JSON.parse(localStorage.getItem('BOOKS'));
    return booksCollection;
  },
  createBook: (book) => {
    const booksCollection = BookCRUD.readBook();
    booksCollection.push(book);
    localStorage.setItem('BOOKS', JSON.stringify(booksCollection));
  },
  removeBook: (index) => {
    let booksCollection = BookCRUD.readBook();
    booksCollection = booksCollection.filter((book, ref) => ref !== +index);
    localStorage.setItem('BOOKS', JSON.stringify(booksCollection));
  },
};

export default BookCRUD;
