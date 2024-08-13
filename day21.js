// Activity 1 Two Sum

//Task1 Two Sum problem on leetcode
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let r=[];
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length;j++)
        {
            if (nums[i]+nums[j]==target && i!=j)
            {
                r[0]=i;
                r[1]=j;
                return r;
            }
        }
    }
};

// [2,7,11,15]
// target =
// 9
// Output
// [0,1]
// Expected
// [0,1]

// Activity 2 Reverse Integer

//Task2 Reverse Integer on leetcode

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let f = 0;
    if (x < 0) {
        f = 1;
        x = -x;
    }
    let rev = 0;
    while (x !== 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (rev < -Math.pow(2, 31) || rev > Math.pow(2, 31) - 1) {
        return 0;
    }
    if (f === 1) {
        return -rev;
    }
    return rev;
};
// Input
// x =
// 123
// Output
// 321

// Activity 3 Palindrome Number

//Task3 Palindrome Number on leetcode

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s=x.toString();
    for(let i=0;i<Math.floor(s.length/2);i++)
    {
        if (s[i]!=s[s.length-1-i])
        {
            return false;
        }
    }
    return true;
};

// Input
// x =
// 121
// Output
// true
// Expected
// true

// Activity 4 Merge Two Sorted Lists

//Task4 Merge two sorted lists on leetcode


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to help with building the new list
    let dummy = new ListNode(-1);
    let current = dummy;
    
    // Traverse both lists and merge them into one
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // If one list is not exhausted, append the remaining elements
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }
    
    // Return the merged list, skipping the dummy node
    return dummy.next;
};

// Input
// list1 =
// [1,2,4]
// list2 =
// [1,3,4]
// Output
// [1,1,2,3,4,4]
// Expected
// [1,1,2,3,4,4]



// Activity 5 Valid Parenthesis

//Task5 Valid Parenthesis on leetcode


var isValid = function(s) {
    // Local stack variable
    let stack = [];
    let top = -1;

    function push(x) {
        stack[++top] = x;
    }

    function pop() {
        if (top == -1) {
            return null; // Return null if stack is empty
        } else {
            return stack[top--];
        }
    }

    function check(x) {
        if (x == '(' || x == '{' || x == '[') {
            return 0; // Opening bracket
        } else if (x == ')' || x == '}' || x == ']') {
            return 1; // Closing bracket
        } else {
            return 2; // Not a bracket (this case should never be hit)
        }
    }

    function check2(x) {
        if (x == '(' || x == ')') {
            return 1; // Parentheses
        } else if (x == '[' || x == ']') {
            return 2; // Square brackets
        } else if (x == '{' || x == '}') {
            return 3; // Curly brackets
        } else {
            return 0;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let k = check(s[i]);
        if (k == 0) {
            push(s[i]); // Push opening brackets onto the stack
        } else if (k == 1) {
            if (top == -1) {
                return false; // No opening bracket to match with
            } else {
                let y = pop();
                if (check2(s[i]) != check2(y)) {
                    return false; // Mismatched brackets
                }
            }
        }
    }

    return top == -1; // Valid if the stack is empty at the end
};

// Input
// s =
// "()"
// Output
// true
// Expected
// true


