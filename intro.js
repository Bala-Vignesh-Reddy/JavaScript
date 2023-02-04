//first code
console.log("Hello World")

//Variables
//We can use var keyword for assign the variable but we will use let keyword
let a = 65
console.log(a)
a = "Op"
console.log(a)


// let  var  const   difference
/* ECMA6 
var id globally declared and let is block scoped
var can be upgraded and re-declared also
let can be upgraded but not re-declared 
const is to defined constant cannot be changed  
*/

//7 datatypes are present
/*
primitive datatype
Null
Number
Symbol
String
Boolean
Bigint
Undefined

=== is equal to(3 equal sign)
!== is not equal to(!or 2 equal sign )
> greater than

Objects not primitive

*/ 

let v = null;   
console.log(typeof a);

// non primitive objects in Js
const item = {
    "harry": true,
    "Shubh": false,
    "Tavish": 67,
    "Rohan": undefined
}
console.log(item["bala"])
