// Activity 1: If-else Statements

// Task 1

let n=4;
if (n>0)
{
    console.log('Positive');
}
else if (n<0)
{
    console.log('Negative');
}
else
{
    console.log('Zero');
}

//output Positive

//Task 2
let age=19;
if (age>=18)
{
    console.log("Eligible");
}
else
{
    console.log("Not Eligible");
}

//output Eligible


// Activity 2: Nested if-else Statements

// Task 3
let n1=11;
let n2=5;
let n3=40;
if (n1>=n2)
{
    if (n1>=n3)
    {
        console.log(n1);
    }
    else
    {
        console.log(n3);
    }
    
}
else
{
    if (n2>=n3)
        {
            console.log(n2);
        }
        else
        {
            console.log(n3);
        }
}

//output 40

// Activity 3: Switch case

// Task 4
let day=7;

switch(day)
{
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("Not a valid Number");
    
}

//output Sunday

// Task 5
let score=57;
score=Math.floor(score/10);
console.log(score);
switch(score)
{
    case 10: case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    case 5:
        console.log('E');
        break;
    default:
        console.log('F');
}
//output E

//Activity 4: Conditional operator

// Task 6
let k=8;
k%2===0? console.log('even'):console.log('odd');
//output even

// Activity 5: Combining Conditions

// Task 7
let year=2016;

if (year%4==0)
{
    if (year%100==0)
    {
        if (year%400==0)
        {
            console.log('Yes');
        }
        else
        {
            console.log('No');
        }
    }
    else
    {
        console.log('Yes');
    }
}
else
{
    console.log('No');
}
//output Yes