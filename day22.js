// Activity 1

//Task1 Add two numbers problem on leetcode

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    function listToString(list) {
        let result = '';
        while (list !== null) {
            result += list.val;
            list = list.next;
        }
        return result;
    }
    let num1 = listToString(l1);
    let num2 = listToString(l2);
    num1=num1.split('').reverse().join('');
    num2=num2.split('').reverse().join('');
    let sum = (BigInt(num1) + BigInt(num2)).toString();
    sum=sum.split('').reverse().join('');
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let char of sum) {
        current.next = new ListNode(parseInt(char));
        current = current.next;
    }

    return dummyHead.next;
};


// Activity 2 

//Task2 Longest substring without repeating characters on leetcode

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length==0)
    {
        return 0;
    }
    let ans=1;
    for(let i=0;i<s.length;i++)
    {
        let ss='';
        for(let j=i;j<s.length;j++)
        {
            if (ss.includes(s[j]))
            {
                break;
            }
            else
            {
                ss=ss+s[j];
                if (ss.length>ans)
                {
                    ans=ss.length;
                }
            }
        }
    }
    return ans;
};

// Activity 3

//Task3 Container with most water on leetcode

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// Activity 4

//Task4 3Sum on leetcode

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const target = 0;
    nums.sort((a, b) => a - b);
    const result = [];
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                const triplet = [nums[i], nums[j], nums[k]];
                const tripletKey = triplet.join(',');
                if (!seen.has(tripletKey)) {
                    result.push(triplet);
                    seen.add(tripletKey);
                }
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};


// Activity 5

//Task5 Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
};
