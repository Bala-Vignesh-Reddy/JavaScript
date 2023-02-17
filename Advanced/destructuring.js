/*
Destructuring
Assignment is used to unpack values from an array or properties from objects, into distinct variable
*/

let arr = [3, 5, 8, 9, 10]
let [a, b, ...rest] = arr
// no need to do this
// let a = arr[0]
// let b = arr[1]

// Spread Syntax
// Spread Syntax allows an iterable such as an array or string
// to be expanded in places where zero or more argumnts are expected. In an object lteral, the spread syntax enumerated the properties of an object and 
// adds the key-value pairs to the object being created

const arr1 = [1, 7, 11]
const op = {...arr1}; //{0:1, 1:7, 2: 11}

const sum = (a, b, c) =>{
    return a+b+c;
}

console.log(sum(...arr1)) //return the sum of array
