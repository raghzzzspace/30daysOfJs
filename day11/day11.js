//Activity 1 Understanding Promises

//Task1 Create a promise that resolves with a message after a 2 second timeout and log the message to the console
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success");
        },2000);
    });
};

asyncFunc1().then((message)=>{
    console.log(message);
})
//output success

//Task2 Create a promise that rejects with a message after a 2 second timeout and handle the error using .catch()
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("failed");
        },2000);
    });
};

asyncFunc2().catch((message)=>{
    console.log(message);
})
//output failed


//Activity 2 Chaining Promises

//Task3 Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order

console.log('Fetching from 1...');
asyncFunc1().then((message)=>{
    console.log(message);
    console.log('Fetching from 2...');
    return asyncFunc2().catch((message)=>{
        console.log(message);
    })
})
//output
// Fetching from 1...
// success
// Fetching from 2...
// failed

//Activity 3 Using Async/Await

//Task4 Write an async function that waits for a promise to resolve and then logs the resolved value

asyncFunc1().then((message)=>{
    return message
})

async function function1()
{
    const m=await asyncFunc1();
    console.log(m);
}

function1();
//output success

//Task5 Write an async function that handles a rejected promise using try-catch and logs the error message

async function function2()
{
    try 
    {
        await asyncFunc2();
    } 
    catch (error) 
    {
        console.log(error);
    }
}

function2();
//output failed

//Activity 4 Fetching Data from an API

//Task6 Use the fetch API to get data from public api and log the response data to the console using promises

const URL='https://cat-fact.herokuapp.com/facts';

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
// //output
//Error: HTTP error! status: 503

//Task7  Use the fetch API to get data from public api and log the response data to the console using async/await

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

//Activity 5 Concurrent Promises

//Task8 Use Promise.all to wait for multiple promises to resolve and then logs the resolved value

function asyncFunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success3");
        },4000);
    });
};

const a=asyncFunc1();
const b=asyncFunc3();
Promise.all([a,b]).then((values)=>{
    console.log(values);
});
//output
//[ 'success', 'success3' ]

//Task9 Use Promise.race to log the value of the first promise that resolves among multiple promises
Promise.race([a,b]).then((values)=>{
    console.log(values);
});
//output
//success