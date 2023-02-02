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

 x
*/