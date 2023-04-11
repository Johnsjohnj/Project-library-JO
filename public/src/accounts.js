function findAccountById(accounts, id) {
 return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,AccountB)=>
  accountA.name.last > AccountB.name.last ? 1: -1);
}

}
function getTotalNumberOfBorrows(account, books) {
  let totalBooksBorrowed=0;
  for(let i=0; i < books.length; i++){
    for(let j=0; j<books[i].borrows.length; j++){
      if(account.id ===books[i].borrows[j].id){
        totalBooksBorrowed +=1;
      }
    }
  }
  return totalBooksBorrowed;
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
