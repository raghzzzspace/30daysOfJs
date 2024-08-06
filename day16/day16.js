// Activity 1 Basic Recursion

//Task1 Write a recursive function to calculate factorial of a number.Log the result for a few test cases.

function fact(n)
{
    if (n==0)
    {
        return 1;
    }
    else
    {
        return n*fact(n-1);
    }
}

console.log(fact(5));
console.log(fact(6));
// 120
// 720

//Task2 Write a recursive function to calculate nth fibonacci number.Log the result for a few test cases.

function fib(n)
{
    if (n==1 || n==2)
    {
        return 1;
    }
    else
    {
        return fib(n-1)+fib(n-2);
    }
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
// 2
// 3
// 5

// Activity 2 Recursion with Arrays

//Task3 Write a recursive function to find sum of all elements in an array. Log the result for a few test cases.

function sum(arr)
{
    if (arr.length==1)
    {
        return arr[0];
    }
    else
    {
        return arr[0]+sum(arr.slice(1));
    }
}

console.log(sum([1,5,3,2]));
console.log(sum([1,5,4,3,2]));
//11
//15

//Task4 Write a recursive function to find maximum element in an array. Log the result for a few test cases.
function maxi(arr)
{
    if (arr.length==1)
        {
            return arr[0];
        }
    else
    {
        return Math.max(arr[0],maxi(arr.slice(1)));
    }
}
console.log(maxi([1,5,3,2]));
console.log(maxi([1,5,4,3,2]));
//5
//5

// Activity 3 String Manipulation with recursion

//Task5 Write a recursive function to reverse a string.Log the result for a few test cases.

function reverse(s)
{
    if (s.length==1)
    {
        return s;
    }
    else
    {
        return s[s.length-1]+reverse(s.slice(0,s.length-1));
    }
}
console.log(reverse("abcd"));
console.log(reverse("aabg"));
// dcba
// gbaa

//Task6 Write a recursive function to check if a string is palindrome.Log the result for a few test cases.

function palindrome(s)
{
    if (s.length<=1)
    {
        return true;
    }
    if(s[0]!=s[s.length-1])
    {
        return false;
    }
    return palindrome(s.slice(1,-1));

}

console.log(palindrome("racecar")); // true
console.log(palindrome("madam"));   // true
console.log(palindrome("hello"));   // false

// Activity 4 Recursive Search

//Task7 Write a recursive function to perform binary search on a sorted array. Log the index of target element for a few test cases.

function binary_search(arr,start,end,key)
{
    if (start<=end)
        {
            let mid=Math.floor((start+end)/2);
        
            if (arr[mid]==key)
            {
                return mid;
            }
            else if (key<arr[mid])
            {
                return binary_search(arr,start,mid-1,key);
            }
            else
            {
                return binary_search(arr,mid+1,end,key);
            }
        }
        else
        {
            return -1;
        }	

}

console.log(binary_search([1,2,3,4,5],0,4,2));
//1
console.log(binary_search([1,2,3,4,5],0,4,4));
//3

//Task8 Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases.

function occurence(arr,target)
{
    if (arr.length==1 && arr[0]==target)
    {
        return 1;
    }
    else if (arr.length==1 && arr[0]!=target)
    {
        return 0;
    }
    else
    {
        if (arr[0]==target)
        {
            return 1+occurence(arr.slice(1),target);
        }
        else
        {
            return 0+occurence(arr.slice(1),target);
        }
    }
}

console.log(occurence([1,2,3,4,8,2,7,5],2));
//2
console.log(occurence([1,2,3,4,5,5,4,5,8,2,7,5],5));
//4

// Activity 5 Tree Traversal

//Task9 Write a recursive function to perform an in order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function inorder(root) {
    if (root === null) {
        return;
    }
    inorder(root.left);
    console.log(root.data + ' ');
    inorder(root.right);
}

const root = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

inorder(root);
// 4
// 2
// 5
// 1
// 6
// 3
// 7

//Task10 Write a recursive function to log the depth of a binary tree.

function height(root) {
    if (root === null) {
        return 0;
    } else {
        // Compute the height of each subtree
        const leftHeight = height(root.left);
        const rightHeight = height(root.right);

        // Return the greater of the two heights plus 1 for the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

console.log(height(root));
//3