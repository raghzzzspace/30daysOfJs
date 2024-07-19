//Activity 1
// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var x=2;
console.log(x);
// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let y='hi';
console.log(y);
//Activity 2
// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const k=true;
console.log(k);
//Activity 3
// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.
let a=1;
let b='hello';
let c=true;
let d={'name':'raghvi','age':18};
let e=[1,2,3,4];
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
//Activity 4
// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let t=2;
console.log(t);
t=3;//reassign
console.log(t)
//Activity 5
// Task 6: Try reassigning a variable declared with `const` and observe the error.
const l=5;
console.log(l);
//l=6; //cannot ressign
console.log(l); //gives error


//Feature Request 1
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let aa=2;
let bb='yes';
let cc=false;
let dd=[1,2,3];
let ee={'color':'blue'};
let undefinedType;
let nullType = null;

console.log('Value:',aa,'Type:',typeof(aa));

console.log('Value:',bb,'Type:',typeof(bb));

console.log('Value:',cc,'Type:',typeof(cc));

console.log('Value:',dd,'Type:',typeof(dd));

console.log('Value:',ee,'Type:',typeof(ee));

console.log('Value:',undefinedType,'Type:',typeof(undefinedType));

console.log('Value:',nullType,'Type:',typeof(nullType));

//Feature Request 2
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let n='Raghvi';
console.log(n)
n='Ressigned Raghvi';
console.log(n)

const s='Gupta';
console.log(s)
//s='Ressigned Gupta';//error can't be reassigned
console.log(s)

