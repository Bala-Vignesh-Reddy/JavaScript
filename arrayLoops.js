let num = [1,2,4,5]
// for(let i=0; i < num.length; i++){
//     console.log(num[i])
// }

// The forEach() method calls a function for each element in an array.
//  The forEach() method is not executed for empty elements.
num.forEach((element) => {
    console.log(element,element)
})

// Array from -> Used to create an array from any other object
let str = "Hello"
let arr =  Array.from(str)
console.log(arr)

//reduce method -> reduces an array to a single value

// const n = [5,23,9,1]
// let sum = n.record(add)

//for .. of -> for of loop can be used to get values from an array
for(let i of num){
    console.log(i)
}
//for .. in -> for in loop can be used to get the keys from any array
for(let i in num){
    console.log(i)
}