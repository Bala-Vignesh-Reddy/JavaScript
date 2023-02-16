/*
Promise API

There are 6 static methods of Promise class
1. Promise.all(promises) ->waits for all promises to resolve and return the array of their results.
If any one fails, it becomes the error and all other results are ignored

2. Promise.allSettled(promises) -> waits for all the promises to settle and returns their results as an array of objects with staus and value.

3. Promise.race(promises) -> waits for the first promise to settle and its result/error becomes the outcome.

4. Promise.any(promises) -> waits for the first promise to fulfill (and nor rejected), and its result become the outcome.
Throws Aggregate Error if all the promises are rejected

5. Promise.resolve(value) -> makes a resolved promise with the given value.

6. Promise.reject(error) -> makes a rejected promise with the given error.
*/
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return("Value 1");
    }, 1000);
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        return("value 2");
    }, 2000);
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        return("value 3");
        // reject(new Error ("Error"))
    }, 3000);
})

// let promise_all = Promise.all([p1, p2, p3])
let promise_all = Promise.allSettled([p1, p2, p3])

promise_all.then((value)=>{
    console.log(value);
})