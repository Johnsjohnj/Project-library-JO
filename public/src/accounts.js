function findAccountById(accounts, id) {
 return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,AccountB)=>
  accountA.name.last > AccountB.name.last ? 1: -1);
}

}

function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  let sum = 0;
  books.map((book) => {
    const { borrows } = book;
    sum += borrows.filter((borrow) => borrow.id === id).length;
  });
  return sum;
}

function filterBooksById(books, accountId) {
  return (possessedBooks = books.filter((book) => {
    const { borrows } = book;
    const [first, ...rest] = borrows;
    return first.id === accountId && !first.returned;
  }));
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = filterBooksById(books, account.id);
  return possessedBooks.map((book) => {
    const authId = book.authorId;
    const author = authors.find((author) => author.id === authId);
    book.author = author;
    return book;
  });
}

 






module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
