//Task 1--> print no.'s from 1-10 using for loop
for(let i=1;i<=10;i++)
{
    console.log(i);
}

//Task 2--> Table of 5 using for loop
for(let i=1;i<=10;i++)
{
        console.log(`5*${i}=${5*i}`);
}

//Task 3--> sum of numbers from 1-10 using while loop
let s=0;
let n=1;
while(n<=10)
{
    s=s+n;
    n=n+1;
}
console.log(s) //output 55

//Task 4--> print 10 to 1 using while loop
let k=10;
while(k>=1)
{
    console.log(k);
    k=k-1;
}

//Task 5--> print 1-5 using do-while loop

let r=1;
do
{
    console.log(r);
    r=r+1;
}
while (r<=5)

//Task 6--> calculate factorial using do-while loop

let a=1;
let num=6;
do
{
    a=a*num;
    num=num-1;

}
while(num>=1)

console.log(a); //output 720

//Task 7--> pattern printing
for(let p=1;p<=5;p++)
{
    s=''
    for(let q=1;q<=p;q++)
    {
        s=s+'*'
    }
    console.log(s);
}

// Task 8--> print 1-10 but skip 5 using continue
for(let i=1;i<=10;i++)
{
    if (i==5)
    {
        continue;
    }
    console.log(i);
}

//Task 9--> print 1-10 but stop loop when number is 7
for(let i=1;i<=10;i++)
{
    if (i==7)
    {
        break;
    }
    console.log(i);
}
