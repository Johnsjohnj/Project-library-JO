function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book=> (book.borrows[0].returned ===false)));
  return (result.length);
}

function getMostCommonGenres(books) { 
  let map = {};
  books.forEach((num) => {
   if (map[num.genre]) {
    map[num.genre]++;
   } else {
    map[num.genre] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   .slice(0, 5);
}

function getMostPopularBooks(books) {
const result= books.map((book)=> {
  const theMostCheckedOutBooks={
    name:book.title,
    count: book.borrows.length,
  };
  return theMostCheckedOutBooks;
});
result.sort((bookA,bookB)=>bookB.count - bookA.count);
result.splice(5);
return result;
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let popularAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     popularAuthor.count += book.borrows.length;
    }
   });
   result.push(popularAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
