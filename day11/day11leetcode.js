
//2634. Filter Elements from Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    filteredArr=[]
    for(let i=0;i<arr.length;i++)
    {
        if (fn(arr[i], i))
        {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};

//2626. Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var val=init;
    for(let i=0;i<nums.length;i++)
   {
       val = fn(val, nums[i]);
       init=val;
   }
   return val;
};