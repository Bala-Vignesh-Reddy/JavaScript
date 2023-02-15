//Syncronous programming
// let a = prompt("What is your name")
// let b = prompt("What is your age")
// let c = prompt("What is your favorite color")
//this is eg because it will run one by one


//Asynchronous programming ->these are the actions that we initate now and they finish late.
console.log('start')
setTimeout(() => {
    console.log("Hello")
}, 3000);
console.log('end')

/*Callback function
It is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.


function loadScript (src, Callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = () => Callback(script)
    document.head.append(script)
}

 
pyramid of Doom
When we have callback inside callbacks, the code gets difficult to manage
this is called as callback hell

the solution of callback hell is promises.

A promise is a "promise of code execution". The code either executes or fails, in both the cases the user will be notified.

let promise = new Promise((resolve, reject)=>{
    //execution
});

let promise = new Promise(function(resolve, reject){
    //codes  for execution
})

promise is used to run the command parallely

.then() -> can be used to get the value
.catch() -> can be used to catch the error

//we can use loadscript with promises so that we can come over the dom of call back
*/


/*Multiple handlers using promises

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return 1;
    }, 2000)
})
p1.then(()=>{
    console.log("hello");
})
p1.then(()=>{
    console.log("i am second");
})

isme .then line wise execute hoga independently

*/