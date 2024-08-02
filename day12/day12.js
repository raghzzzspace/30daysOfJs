// Activity 1 Basic Error Handling with try and catch

//Task1 Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console

function hello()
{
    throw new Error("This is an intentional error");
};

try {
    hello();
} catch (error) {
    console.log('The error is:',error.message);
}
//The error is: This is an intentional error

//Task2 Create a function that divides two numbers and throws an error if denominator is zero. Use a try-catch block to handle this error

function divide()
{
    let a=7;
    let b=0;
    if (b==0)
    {
        throw new Error('ZERO DIVISION ERROR');
    }
    else
    {
        return (a/b);
    }
}

try {
    divide();
    
} catch (error) {
    console.log(error.message);
}
//ZERO DIVISION ERROR

// Activity 2 Finally Block

//Task3 Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe th execution flow

try {
    console.log('I am in try');
    hello();
} catch (error) {
    console.log('I am in catch block');
    console.log(error.message);
}
finally{
    console.log('I am in finally block');
}

// I am in try
// I am in catch block
// I am in finally block

// Activity 3 Custom Error Objects

//Task4 Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using try-catch block
class ZeroDivisionError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = "ZeroDivisionError"; // Set the error name
    }
}
function divide2() {
    let a = 7;
    let b = 0;

    if (b === 0) {
        throw new ZeroDivisionError('ZERO DIVISION ERROR');
    } else {
        return a / b;
    }
}
try {
    let result = divide2();
    console.log("Result:", result);
} catch (error) {
    if (error instanceof ZeroDivisionError) {
        console.error(`Caught a custom error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a custom error: ZeroDivisionError - ZERO DIVISION ERROR

//Task5 Write a function that validates user input (eg checking if a string is not empty) and thows a custom error if validation fails. Handle the custom error using a try-catch block
class ValidationError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = "ValidationErrorOccured"; // Set the error name
    }
}
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError('Input cannot be an empty string or non-string value');
    }
    return "Input is valid!";
}
try {
    const userInput = '';
    const result = validateInput(userInput);
    console.log(result);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Caught a validation error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a validation error: ValidationErrorOccured - Input cannot be an empty string or non-string value

// Activity 4 Error Handling in Promises

//Task6 Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.5) {
                resolve("success");
            } else {
                reject(new Error("Random failure"));
            }
        }, 2000);
    });
}

randomPromise()
    .then(result => {
        console.log("Promise resolved with:", result);
    })
    .catch(error => {
        console.log("Promise rejected with:", error.message);
    });
//Promise rejected with: Random failure
//Promise resolved with: success

//Task7 Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and log the error message

async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log("Promise resolved with:", result);
    } catch (error) {
        console.log("Promise rejected with:", error.message);
    }
}

handlePromise();
//Promise rejected with: Random failure
// Promise resolved with: success

// Activity 5 Graceful Error Handling in Fetch

//Task8 Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate message to the console
const URL='https://cat-fact.herokuapp.com/factsss//';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    reject(new Error(`HTTP error! status: ${response.status}`));
                } else {
                    response.json().then(data => resolve(data));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));
//Error: HTTP error! status: 404

//Task9 Use the fetch API to request data from an invalid URL within an async function and handle the error using .catch(). Log an appropriate message to the console

const getFacts=async()=>
    {
        try
        {
            console.log('getting data...');
            let response=await fetch(URL);
            if (!response.ok) {
                throw new Error('HTTP error! status: ${response.status}');
            }
            let data = await response.json();
            console.log(data);
        }
        catch(error)
        {
            console.log(error);
        }
        
    };
    getFacts();
    // output getting data...
    // Error: HTTP error! status: 503