// Activity 1 Sorting Algorithms

//Task1 Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array

function bubblesort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let f=0;
        for(let j=0;j<arr.length-1-i;j++)
        {
            if (arr[i]>arr[i+1])
            {
                let k=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=k;
                f=1;
            }
            if (f==0)
            {
                break;
            }
        }
    }
}

let arr=[1,6,3,6,7,8];
bubblesort(arr);
console.log(arr);
//[ 1, 3, 6, 6, 7, 8 ]

//Task2 Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array
function selectionsort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let mini=i;
        for(let j=i+1;j<arr.length;j++)
        {
            if (arr[mini]>arr[j])
            {
                lmini=j;
            }
        }
        if (mini!=i)
        {
            let k=arr[mini];
            arr[mini]=arr[i];
            arr[i]=k;
        }
    }
}

let arr2=[1,6,3,4,6,7];
selectionsort(arr2);
console.log(arr2);
//[ 1, 6, 3, 4, 6, 7 ]

//Task3 Implement the quick sort algorithm to sort an array of numbers in ascending order. Log the sorted array

function partition(arr,lb,ub)
{
	let piv=arr[lb];
	let i,j;
	i=lb;
	j=ub;
	while(i<j)
	{
		while(arr[i]<=piv)
		{
			i++;
		}
		while(arr[j]>piv)
		{
			j--;
		}
		if (i<j)
		{
			let temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
		}
	}
	let temp2=arr[lb];
	arr[lb]=arr[j];
	arr[j]=temp2;
	return j;
}

function quicksort(arr,low,high)
{
    if (low<high)
    {
        let partitionind=partition(arr,low,high);
        quicksort(arr,low,partitionind-1);
        quicksort(arr,partitionind+1,high);
    }
}
let arr3=[1,6,3,4,6,7];
console.log(arr3);
quicksort(arr3,0,arr.length-1);
//[ 1, 6, 3, 4, 6, 7 ]


// Activity 2 Searching Algorithms

//Task4 Implement the linear search algorithm to find a target value in an array. Log the index of target value

function linearsearch(arr,target)
{
    let i;
    for(i=0;i<arr.length;i++)
    {
        if (arr[i]==target)
        {
            console.log("Found at index",i);
            return;
        }
    }
    if (i==arr.length)
    {
        console.log("Not found");
        return;
    }
}
let arr4=[1,5,3,4,6];
linearsearch(arr4,4);
//Found at index 3
linearsearch(arr4,9);
//Not found

//Task5 Implement the binary search algorithm to find a target value in an array. Log the index of target value

function binarysearch(arr,l,h,target)
{
    let i=l;
    let j=h;
    while(i<=j)
    {
        let mid=Math.floor((i+j)/2);
        if (arr[mid]==target)
        {
            console.log("FOUND AT INDEX",i);
            return;
        }
        else if (arr[mid]>target)
        {
            j=mid-1;
        }
        else
        {
            i=mid+1;
        }
    }
    if (i>j)
    {
        console.log("NOT FOUND");
        return;
    }
}

let arr7=[1,2,3,4,5];
binarysearch(arr7,0,arr7.length-1,4);
binarysearch(arr7,0,arr7.length-1,9);
// FOUND AT INDEX 3
// NOT FOUND

// Activity 3 String Algorithms

//Task6 Write a function to count the occurences of each character in a string. Log the character counts

function count(arr)
{
    let c={};
    for(let i=0;i<arr.length;i++)
    {
        c[arr[i]]=(c[arr[i]] || 0)+1;
    }
    console.log(c);
   
}

let arr8=[1,6,3,4,5,6,7,8];
count(arr8);
//{ '1': 1, '3': 1, '4': 1, '5': 1, '6': 2, '7': 1, '8': 1 }

//Task7 Write a function to find the longest substring without repeating characters in a string. Log the length of the string.

function longestunique(s) {
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        let seenChars = new Set();
        let currentLength = 0;
        
        for (let j = i; j < s.length; j++) {
            if (seenChars.has(s[j])) {
                break; 
            } else {
                seenChars.add(s[j]); 
                currentLength++; 
            }
        }
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}

let ss = 'rragghvi';
console.log(longestunique(ss)); 
// Output: 4

// Activity 4 Array Algorithms

//Task8 Write a function to rotate an array by k positions. Log the rotated array

function rotate(arr,k)
{
    let arr2=[];
    let t=0;
    for(let i=k;i<arr.length;i++)
    {
        arr2[t]=arr[i];
        t++;
    }
    for(let i=0;i<k;i++)
    {
        arr2[t]=arr[i];
        t++;
    }
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr2[i];
    }
    return arr; 
        
}
let arr9=[1,5,3,4,5,7];
console.log(rotate(arr9,2));
//[ 3, 4, 5, 7, 1, 5 ]

//Task9 Write a function to merge two sorted arrays into one sorted array. Log the merged array
function merge(arr,arr2)
{
	let i,j;
	i=0;
	j=0;
	let k=0;
	let b=[];
	while(i<arr.length && j<arr2.length)
	{
		if (arr[i]<=arr2[j])
		{
			b[k]=arr[i];
			i++;
			k++;
		}
		else
		{
			b[k]=arr2[j];
			k++;
			j++;
		}
	}
	if(i==arr.length)
	{
		while(j<arr2.length)
		{
			b[k]=arr2[j];
			k++;
			j++;
		}
	}
	else
	{
		while(i<arr.length)
		{
			b[k]=arr[i];
			i++;
			k++;
		}
	}
	return b;
}

let a1=[1,2,3,4,5];
let a2=[2,3,5,6];
console.log(merge(a1,a2));
// [1, 2, 2, 3, 3, 4, 5, 5, 6]

// Activity 5

//Task10 Write a function to solve the fibonacci sequence using dynamic programming. Log the fibonacci numbers
//taken help
function fibonacci(n) {
    if (n <= 1) return n;
  
    let dp = [0, 1]; // Base cases
  
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    return dp;
  }
  
console.log(fibonacci(10)); // Output: 55
// [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34,
//    55
// ]

//Task11 Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
//taken help
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }

    console.log(`Maximum value that can be obtained: ${dp[capacity]}`);
    return dp[capacity];
}

// Example usage:
const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;

knapsack(weights, values, capacity); // Output: Maximum value that can be obtained: 9
