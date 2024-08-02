//2629. Function Composition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if (functions.length==0)
        {
            return x;
        }
        let k=x;
        for(let i=functions.length-1;i>=0;i--)
        {
            k=functions[i](k);
        }
        return k;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

//


//2666. Allow one function call

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let c=0;
    return function(...args){
        let ans;
        if (c<1)
        {
            ans=fn(...args);
            c=c+1;
        }
        return ans;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
