// Activity 1 Template Literals

//Task 1 Use template literals to create a string that includes variables for a person's name and age and log the string to the console

const person={name:'Raghvi',age:24};
const s=`Name is ${person.name} and age is ${person.age}`;
console.log(s);
//output 
//Name is Raghvi and age is 24

//Task 2 Create a multi-line string using template literals and log it to the console
const ss=`Hi 
How are you?
`
console.log(ss);
//output
// Hi 
// How are you?

// Activity 2 Destructuring 

//Task 3 Use array destructuring to extract the first and second elements from an array of numbers and log it to console
const a=[1,2,3,4,5];
const [first, second] = a;
console.log(first, second);
//output
//1 2

//Task 4 Use object destructuring to extract the title and author from a book object and log them to console
const book={name:'Harry Potter',author:'JK Rowling'};
const {name:NAME,author:AUTHOR}=book;
console.log(NAME,AUTHOR);
//output
//Harry Potter JK Rowling

// Activity 3 Spread and Rest Operators

//Task 5 Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log it to console
const b=[1,2,3,4,5,6,7];
const c=[...b,10];
console.log(c);
//output
// [
//     1, 2, 3,  4,
//     5, 6, 7, 10
// ]

//Task 6 Use the rest operator in a function to accept an arbitrary number of arguments , sum them and return the result

const sum=(...args)=>{
    let c=0;
    for(let arg of args)
    {
        c=c+arg;
    }
    return c;
}
console.log(sum(1,2,3,7,6));
//output 19

// Activity 4 Default Parameters

//Task 7 Write a function that takes two parameters and returns their product with the second parameter having a default value 1.
//Log the result without the second parameter

const mul=(a,b=1)=>{
    return a*b;
}
console.log(mul(4));
//output 4

// Activity 5 Enhanced Object Literals

//Task 8 Use enhanced object literals to create an object with method and preperties and log the object to console

const name2 = 'To Kill a Mockingbird';
const author = 'Harper Lee';
const year = 1960;

const book2 = {
    name2,
    author,
    year}
console.log(book2);
//output
//{ name2: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

//Task 9 Create an object with computed property names based on variables and log the object to console
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const person2 = {
    [propName1]: 'John',
    [propName2]: 'Doe',
    [propName3]: 30
};

console.log(person2);
//output
//{ firstName: 'John', lastName: 'Doe', age: 30 }
