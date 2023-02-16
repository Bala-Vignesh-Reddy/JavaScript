/* 
Async/Await
There is a speical syntax to work with promises in Js
A function can be made async by using async keyword like this

async function hello(){
    return 2;
}

An async function always returns a promise. Other valye are wrapped in a promise automatically

await function will stop the execution till the promise fulfill it.
it works only inside the async function
let value = await promise



Error Handling
we can use try and catch
try{
    //try the code
}
catch(error){
    //error handling
}


error object
has error.name gives the name of error
error.message give the what has cause error 
error.stack

We can throw custom error using throw keyword
like
throw new Error ("error's message")

their is finally caluse also
as we know if try will not work then it will run catch but finally will run always

finally{
    //code
}
*/