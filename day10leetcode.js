//2635. Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    returnedArray=[]
    for(let i=0;i<arr.length;i++)
    {
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray;
};

//2665 Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var currentCount = init; // This keeps track of the current count
    var initial = init; // Store the initial value for reset

    var increment = function() {
        currentCount += 1; // Increment the current count
        return currentCount;
    };

    var decrement = function() {
        currentCount -= 1; // Decrement the current count
        return currentCount;
    };

    var reset = function() {
        currentCount = initial; // Reset to the initial value
        return currentCount;
    };

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */