/*
IIFE -> Immediately Invoked Function Expressions
It is a Js function that runs as soon as it is defined

syntax of IIFE
(function(){
    ..
    ..

})();
It is used to avoid polluting the global namespace, execute a async, await, etc.


*/

let a = () => {
    return new Promise((reslove, reject)=>{
        setTimeout(() => {
            reslove(5)
        }, 3000);
    })
}

(async () => {
    let b = await a();
    console.log(b)
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d); 
})