// DAY2: Operators

// Activity 1: Arithmetic operations

// Task 1 : Write a program to add two numbers and log the result to the console.

let a=2;
let b=3;
console.log('The addition result is',a+b);
// Task 2 : Write a program to subtract two numbers and log the result to the console.
console.log("The subtraction result is",a-b);
// Task 3 : Write a program to multiply two numbers and log the result to the console.
console.log("The multiplication result is",a*b);
// Task 4 : Write a program to divide two numbers and log the result to the console.
console.log("The division result is",a/b);
// Task 5 : Write a program to find the remainder when one number is divided by another number and log the result to the console.
console.log("The division result is",a%b);

// Activity 2 : Assignment Operators

// Task 6 : Use the += operator to add a number to a variable and log the result to the console
// addition assignment operator
let k=10;
k+=4;
console.log('Addition Assignment',k);
// Task 7 : Use the -= operator to add a number to a variable and log the result to the console
// subtraction assignment operator
k-=2;
console.log('Subtraction Assignment',k);

// Activity 3 : Comparison Operators

// Task 8 : Write a program to compare two numbers using > and < and log the result to console
// greater than operator >
console.log('Greater than',3>5); //Greater than false
//less than operator <
console.log('Less than',3<5);//Less than true

// Task 9 : Write a program to compare two numbers using >= and <= and log the result to console
// greater than equal to operator >
console.log('Greater than equal to',3>=5);
// less than equal to operator
console.log('Less than equal to',3<=5);

// Task 10 : Write a program to compare two numbers using == and === and log the result to console
// equal to operator >
let p=2;
let q='2';
console.log(p==q);
console.log(p===q);

// Activity 4: Logical Operators

// Task 11 : Write a program that uses && operator to combine two conditions and log the result to console
console.log('logical and operator',((2>4) && (8>7)));
// Task 12 : Write a program that uses || operator to combine two conditions and log the result to console
console.log('logical or operator',((2>4) || (8>7)));
// Task 13 : Write a program that uses ! operator to negate a condition and log the result to console
console.log(!(3));

// Activity 5: Ternary Operator


// Task 14 : Write a program that uses ternary operator to check if a number is positive or negative and log the result to console
3>0? console.log('positive'): console.log('negative');

// Feature request
// 1. Arithmetic operations script

let n = 10;

// addition operator
console.log("Addition: n + 3 = ", n + 3);

// subtraction operator
console.log("Subtraction: n - 3 =", n - 3);

// multiplication operator
console.log("Multiplication: n * 3 =", n * 3);

// division operator
console.log("Division: n / 3 =", n / 3);

// remainder operator
console.log("Remainder: n % 3 =", n % 3);

// increment operator
console.log("Increment: ++n =", ++n);

// decrement operator
console.log("Decrement: --n =", --n);

// exponentiation operator
console.log("Exponentiation: n ** 3 =", n ** 3);

//output
// Addition: n + 3 =  13
// Subtraction: n - 3 = 7
// Multiplication: n * 3 = 30
// Division: n / 3 = 3.3333333333333335
// Remainder: n % 3 = 1
// Increment: ++n = 11
// Decrement: --n = 10
// Exponentiation: n ** 3 = 1000

// 2. Comparison and logical operators script

// equal to operator
console.log("Equal to: 3 == 3 is", 3 == 3);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// greater than operator
console.log("Greater than: 3 > 5 is", 3 > 5);

// less than operator
console.log("Less than: 3 < 5 is", 3 < 5);

// output
// Equal to: 3 == 3 is true
// Not equal to: 3 != 3 is false
// Strictly equal to: 2 === '2' is false
// Greater than: 3 > 5 is false
// Less than: 3 < 5 is true

// logical AND
console.log((n < 5) && (n > 0));  // false

// logical OR
console.log((n > 2) || (n > 5));  // true

// logical NOT
console.log(!(n == 3));  // true


// 3. ternary operator script
let n1=-3;
n1>0 ? console.log(n1,"is positive") : console.log(n1,"is negative");  //output: -3 is negative