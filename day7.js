// Activity 1 Object Creation and Access

//Task 1 Create an object representing a book with properties like title, author and year and log the object to the console

const book={title:'Harry Potter',author:'J K Rowling',year:2024};
console.log(book);

//Task 2 Access and log the title and author properties of the book object
console.log(book.title);
console.log(book['author']);
//output
// Harry Potter
// J K Rowling

// Activity 2 Object Methods

//Task 3 Add a method to the book object that returns a string with the book's title and author, log the result of calling this method
book.print=function(){
    return `${book.title} by ${book.author}`;
};
console.log(book.print());
//output
//Harry Potter by J K Rowling

//Task 4 Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object

book.updateyear=function(y){
    this.year=y;
    console.log('updated');
    console.log(book);
}
book.updateyear(2023);
//output
//updated
// {
//   title: 'Harry Potter',
//   author: 'J K Rowling',
//   year: 2023,
//   print: [Function (anonymous)],
//   updateyear: [Function (anonymous)]
// }

// Activity 3v Nested Objects 

//Task 5 Create a nested object representing a library with preperties like name and books(array of book objects), log the object to console
const b1={bname:'1',btitle:'2026'};
const b2={bname:'2',btitle:'2023'};
const library={name:'NIT Library', books:[b1,b2]};
console.log(library);
//output
// {
//     name: 'NIT Library',
//     books: [ { bname: '1', byear: '2026' }, { bname: '2', byear: '2023' } ]
// }

//Task 6 Access and log the name of the library and titles of all books in the library

for(let i=0;i<library.books.length;i++)
{
    console.log(library.books[i].bname);
    console.log(library.books[i].btitle);
};
//output
// 1
// 2026
// 2
// 2023

// Activity 4 This keyword

//Task 7 Add a method to the book object that uses this keyword to return a string with book's title and year , log the result of calling this method

book.print2=function(){
    return `${this.title} in ${this.year}`;
};
console.log(book.print2());
//output
//Harry Potter in 2023

// Activity 5 Object Iteration

//Task 8 Use a for...in loop to iterate over the properties of book object and log each property and its value
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}
//output
// title: Harry Potter
// author: J K Rowling
// year: 2023
// print: function(){
//     return `${book.title} by ${book.author}`;
// }
// updateyear: function(y){
//     this.year=y;
//     console.log('updated');
//     console.log(book);
// }
// print2: function(){
//     return `${this.title} in ${this.year}`;
// }

//Task 9 Use Object.keys and Object.values methods to log all the keys and values of the book object
console.log(Object.keys(book));
console.log(Object.values(book));
//output
// [ 'title', 'author', 'year', 'print', 'updateyear', 'print2' ]
// [
//   'Harry Potter',
//   'J K Rowling',
//   2023,
//   [Function (anonymous)],
//   [Function (anonymous)],
//   [Function (anonymous)]
// ]
