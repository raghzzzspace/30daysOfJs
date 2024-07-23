//Activity 1 Function Declaration

//Task 1 Function to check if a number is positive, negative or zero and log the result to the console

function check(num)
{
    if (num>0)
    {
        console.log('Positive');
    }
    else if (num<0)
    {
        console.log('Negative');
    }
    else
    {
        console.log('Zero');
    }
}

check(5); //output Positive

//Task 2 Function to calculate square of a number and return the result

function square(num)
{
    return num*num;
}
console.log(square(9)); //output 81

//Activity 2 Function Expression

//Task 3 Function expression to find maximum of two numbers and log the result to the console

const maxi= function(x,y){
    if (x>y)
    {
        return x
    }
    else if (y>x)
    {
        return y;
    }
    else
    {
        return 'equal';
    }
};

console.log(maxi(10,20)); //output 20

//Task 4 Function expression to concatenate two strings and return the result

const concati=function(x,y)
{
    return x+y;
}
console.log(concati('a','b')); //output ab

//Activity 3 Arrow Functions

//Task 5 Arrow Function to calculate sum of two numbers and return the result

const sum=(a,b)=>{
    return a+b;
}

console.log(sum(10,20)) //output 30

//Task 6 Arrow Function to check if a string contains a specific character and returns a boolean value

const v=(s,c)=>{
    for(let i=0;i<s.length;i++)
    {
        if (s[i]==c)
        {
            return true;
        }
        
    }
    return false;
};

console.log(v('Raghvi','i')); //output true

//Activity 4 Function Parameter and Default Values

//Task 7 Function that takes two parameters and returns their product. Provide default value to the second parameter

const product=(a,b=9)=>
{
    return a*b;
}

console.log(product(6)); //output 54
console.log(product(7,8)); //output 56

//Task 8 Function that takes a person's name and age and returns a greeting message. Provide default value for age

const greet=(a,b=24)=>{
    return 'Greetings '+a+' of age '+b;
}

console.log(greet('Raghvi'));
console.log(greet('Esha',17));

//output 
// Greetings Raghvi of age 24
// Greetings Esha of age 17

//Activity 5 Higher Order Functions

//Task 9 Write a higher order function that takes a function and a number and calls the function that many times

const hi=()=>{return 'hi'};

const higher=(func,a)=>
{
    for(let i=1;i<=a;i++)
    {
        console.log(func());
    }
}
higher(hi,4);
//output
// hi
// hi
// hi
// hi

//Task 10 Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies
//the second function to the result

const sq=(a)=>
{
    return a*a;
}
const cube=(s)=>
{
    return s*s*s;
}

const higher2=(func1,func2,a)=>
{
    let x=func1(a);
    console.log(x);
    console.log(func2(x));
}

higher2(sq,cube,3)
// output
// 9
// 729