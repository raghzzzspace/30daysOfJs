// Activity 1 Creating and Exporting modules

//Task1 Create a module that exports a function to add two numbers. Import and use this module in another script

export function add(a,b)
{
    return a+b;
};


//Task2 Create a module that exports an object representing a person with preperties and methods. Import and use this module in another script.

export const person={'name':'Ram','age':18,greet(){console.log(`My name is ${this.name}`)}};

//Task3 Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function hello1()
{
    console.log('hello1');
};

function hello2()
{
    console.log('hello2');
}

export{
    hello1,
    hello2
}

//Task4 Create a module that exports a single function using default export. Import and use this function in another script.

export default function hello3()
{
    console.log('hello3');
}

// Activity 3 Importing entire modules

//Task5 Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties

export function hello4()
{
    console.log("hello4");
}
export const a=3;

// Activity 4 Using Third Party Modules

//Task6 Install a third party module (eg lodash) using npm. Import and use a function from this module in a script

//see script.js

//Task7 Install a third party module (eg axios) using npm. Import and use a function to make a network request in a script

//see script.js

// Activity 5 Module Bundling

//Task8 Use a module bundler like Webpack or Parcel to bundle multiple Javascript files into a single file. Write a script to demonstrate the bundling process.

//index.html