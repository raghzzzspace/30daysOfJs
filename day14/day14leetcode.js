//2621. Sleep
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve(millis);
        },millis);
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

//2637. Promise Time Limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const p=new Promise((reject,resolve)=>{
            setTimeout(()=>{
                resolve('Time Limit Exceeded');
            },t);
        })
        const fnPromise = fn(...args);

        // Use Promise.race to return whichever promise settles first
        return Promise.race([fnPromise,p]);

    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */