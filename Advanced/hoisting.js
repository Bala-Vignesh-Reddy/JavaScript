/*
Hoisting refers to the process whereby the interpreter appears to move the declarations to the top
of the code before execution

Vairables can thus be referenced before they are declared in Js

Imp Note: Declaration hoisted to the top but initialization is not. The variable will be undefined until the line where its initialized is reached

Hoisting with let and var
with let and var hoisting is different
console.log(num) -> Error if let or const
let num = 7     -> with var undefined is printed

Function expressions and class expressions are not hoisted
*/

greet()
function greet(){
    console.log("Good Morning!")
}
//this will work