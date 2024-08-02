//2623. Memoize
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let l={};
    return function(...args) {
        key=''
        for(let i=0;i<args.length;i++)
        {
            key+=JSON.stringify(args[i])+'+'; // Construct the key by serializing each argument
        }
        if (l[key]!==undefined)
        {
            return l[key];
        }
        else
        {
            const r=fn(...args);
            l[key]=r;
            return r;
        }

    }
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */