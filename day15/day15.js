// Activity 1 Understanding Closures

//Task1 Write a function that returns another function, where the inner function accesses a variable from outer function's scope. Call the inner function and log the result.

function hello()
{
    let name='Raghvi';
    function hello2()
    {
        console.log(name);
    }
    return hello2;
}

const f=hello();
f();
//Raghvi

//Task2 Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter=0;
    function increment()
    {
        counter++;
    }
    function get()
    {
        console.log(counter);
    }
    return {
        increment:increment,
        get:get
    };
}

const f2=createCounter();
f2.increment();
f2.increment();
f2.get();
//2

// Activity 2 Practical Closures

//Task3 WRITE A FUNCTION THAT GENERATES UNIQUE ids. Use a closure to keep a track of the last generated ID and increment it with each call.

function createid()
{
    let id=120;
    function inc()
    {
        id++;
    }
    function get()
    {
        console.log(id);
    }
    return{
        inc:inc,
        get:get
    }
}

const f3=createid();
f3.inc();
f3.inc();
f3.inc();
f3.get();
//123

//Task4 Create a closure that captures a user's name and returns a function that greets a user by name.

function username(a)
{
    let name=a;
    function greet()
    {
        console.log(`Hello ${name}`);
    }
    return greet;
}

const f4=username('Esha');
f4();
//Hello Esha

// Activity 3 Closures in Loops

//Task5 Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const functions = [];

for (let i=0;i<5;i++) 
{
    functions[i]=(function(index) 
    {
        function k() {
            console.log(index);
        };
        return k;
    })(i);
}

functions[3]();
//3

// Activity 4 Module Pattern

//Task6 Use closures to create a simple module for managing a collection of items. Implement methods to add, remove and list items.

function manage()
{
    let items=[];
    function add(item)
    {
        items.push(item);
    }
    function remove(item)
    {
        items=items.filter(i =>i!==item);
    }
    function list() 
    {
        console.log(items);
    }
    return {
        add: add,
        remove: remove,
        list: list
    };
}

const f5=manage();
f5.add(2);
f5.add(3);
f5.add(1);
f5.add(5);
f5.list();
f5.remove(1);
f5.list();
// [ 2, 3, 1, 5 ]
// [ 2, 3, 5 ]

// Activity 5 Memoization

//Task7 Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache=new Map(); // Stores the results of previous computations

    function k(...args) 
    {
        const key = JSON.stringify(args); // Create a key based on the function arguments
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
    return k;
}

function Function(x) {
    return x;
    
}

const memoizedFunction = memoize(Function);

console.log(memoizedFunction(5)); // Computation happens and result is cached
console.log(memoizedFunction(5)); // Result is retrieved from the cache
console.log(memoizedFunction(6)); // Computation happens and result is cached

//Task8 Create a memoized version of a function that calculates the factorial of a number.

function factorial(n) {
    if (n < 0) 
        {throw new Error("Factorial is not defined for negative numbers")};
    if (n === 0 || n === 1) 
        {return 1};
    return n*factorial(n-1);
}

// Memoized factorial function
const memoizedFactorial=memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached result)
console.log(memoizedFactorial(6)); // Output: 720
console.log(memoizedFactorial(0)); // Output: 1
