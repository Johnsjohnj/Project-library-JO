function findAccountById(accounts, id) {
 return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,AccountB)=>
  accountA.name.last > AccountB.name.last ? 1: -1);
}

}
//Added a helper function below,just before the main one.
function filterBooksById(books, accountId) {
  return (possessedBooks = books.filter((book) => {
    const { borrows } = book;
    const [first, ...rest] = borrows;
    return first.id === accountId && !first.returned;
  }));
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


function getBooksPossessedByAccount(account, books, authors){
const possessedBooks=[];
for (let  i = 0; i < books.length; i++) {
  const book = books[i];
  const author = authors.find(author => author.id === book.authorId);
  if (book.borrows.some(borrow => borrow.id === account.id && !borrow.returned)) {
    possessedBooks.push({ ...book, author });
  }
}

return possessedBooks;
} 






module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
