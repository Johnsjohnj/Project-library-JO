function findById(stuff,id){
  return stuff.find((stuff)=> stuff.id ===id);
}
function findAuthorById(authors, id) {
  return findById(authors,id);

}

function findBookById(books, id) {
  return findById(books,id);
  
}

function partitionBooksByBorrowedStatus(books) {
  let booksNotBorrowed= books.filter((book)=> 
  book.borrows.every((borrow)=> borrow.returned === true));
  let booksBorrowed= books.filter((book)=>
  book.borrows.some((borrow)=> borrow.returned === false));
  let currentStatus=[[...booksBorrowed], [...booksNotBorrowed]];
  return currentStatus;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
