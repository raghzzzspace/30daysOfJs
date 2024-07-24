// Activity 1 Array Creation and Access

//Task 1 Create an array of numbers from 1 to 5 and log the array to the console

const a=[1,2,3,4,5];
console.log(a);
//output
//[ 1, 2, 3, 4, 5 ]

//Task 2 Access the first and last elements of the array and log them to th console
console.log(a[0]); //1
console.log(a[a.length-1]); //5

// Activity 2 Array Methods (Basic)

//Task 3 Use the push method to add a new number to the end of the array and log the updated array
a.push(8);
console.log(a);
//output
//[ 1, 2, 3, 4, 5, 8 ]

//Task 4  Use the pop method to remove the last element from the array and log the updated array
a.pop();
console.log(a);
//output
//[ 1, 2, 3, 4, 5 ]

//Task 5 Use the shift method to remove the first element from the array and log the updated array
a.shift();
console.log(a);
//output
//[ 2, 3, 4, 5 ]

//Task 6 Use the unshift method to add the new number to the beginning of the array and log the updated array
a.unshift(1);
console.log(a);
//output
//[ 1, 2, 3, 4, 5 ]

// Activity 3 Array Methods (Intermediate)

//Task 7 Use the map method to create a new array where each number is doubled and log the new array
const db=(n)=>{
    return n*2;
}
const b=a.map(db);

console.log(b);
//output 
//[ 2, 4, 6, 8, 10 ]

//Task 8 Use the filter method to create a new array with only even numbers and log the new array
const even=(n)=>{
    if (n%2==0){
        return n;
    }
}
const c=a.filter(even);
console.log(c);
//output
//[ 2, 4 ]

//Task 9 Use the reduce method to calculate the sum of all numbers in the array and log the result
const sum=(t,n)=>{
    return n+t;
}
const d=a.reduce(sum,0);
console.log(d);
//output 15

// Activity 4 Array Iteration

//Task 10 Use a for loop to iterate over the array and log each element to the console
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
//output
// 1
// 2
// 3
// 4
// 5

//Task 11 Use a forEach loop to iterate over the array and log each element to the console
const print=(n)=>{
    console.log(n);
}
a.forEach(print);
//output
// 1
// 2
// 3
// 4
// 5

// Activity 5 Multi-dimensional Arrays

//Task 12 Create a 2-dimensional array and log the entire array to the console

const e=[[1,2],[3,4],[5,6],[7,8]];
console.log(e);
//output 
//[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

//Task 13 Access and log a specific element from the 2-dimensional array
console.log(e[0][1]); 
//output 2
