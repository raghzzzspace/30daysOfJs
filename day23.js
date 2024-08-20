// Activity 1
//Task1 Median of 2 sorted arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }
    let k = mergedArray.length;
    if (k % 2 === 0) {
        return (mergedArray[(k / 2) - 1] + mergedArray[k / 2]) / 2.0;
    } else {
        return mergedArray[Math.floor(k / 2)];
    }

}

// Activity 2

//Merge K sorted lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let newlist=[];
    for (let i = 0; i < lists.length; i++) {
        let current = lists[i];
        while (current !== null) {
            newlist.push(current.val);
            current = current.next;
        }
    }
    newlist.sort((a, b) => a - b);
    let dummy = new ListNode(0);
    let current = dummy;

    for (let i = 0; i < newlist.length; i++) {
        current.next = new ListNode(newlist[i]);
        current = current.next;
    }
    return dummy.next;
};


// Activity 3 

//Task3 Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
};

// Activity 4

//Task4 N Queens

function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => ".".repeat(n));

    const isSafe = (row, col, queens) => {
        for (let [r, c] of queens) {
            if (c === col || r - c === row - col || r + c === row + col) {
                return false;
            }
        }
        return true;
    };

    const backtrack = (row, queens) => {
        if (row === n) {
            solutions.push(board.map((line, r) => line.slice(0, queens[r][1]) + "Q" + line.slice(queens[r][1] + 1)));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col, queens)) {
                queens.push([row, col]);
                backtrack(row + 1, queens);
                queens.pop();
            }
        }
    };

    backtrack(0, []);
    return solutions;
};


// Activity 5

//Word Ladder

var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let queue = [[beginWord, 1]];
    let visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [word, level] = queue.shift();
        
        for (let i = 0; i < word.length; i++) {
            for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
                const newWord = word.substring(0, i) + String.fromCharCode(charCode) + word.substring(i + 1);
                
                if (newWord === endWord) return level + 1;
                
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }

    return 0;
};
