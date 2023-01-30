//1.Create an array of numbers and take input from the user to add numbrs to this array
// let arr1=[1,2,3]
// // let a = prompt("Enter the number")       this will only work in browser
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr1)

// 2. Keep adding numbers to array in until 0 is added to the array
// do{
//     let arr1=[1,2,3]
//     // let a = prompt("Enter the number")       
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr1)
// }while(a!=0);

// 3. Filter for number divisible by 10 from a given array
let arr2 = [10,23,100,45,50]
let a = arr2.filter((val) => {
    // if(val%10==0){
    //     return val
    // }
    return val%10 == 0
})
console.log(a)

// 4. Create an array of square of given numbers
// let arr3 = [1,2,3,4]
let b = arr3.map((val) => {
    return val*val
})
console.log(b)

// 5. Use reduce to calculate factorial of a given number from an array of first n natural number
let arr3 = [1,2,3,4]
let c = arr3.reduce((x1,x2) => {
    return x1*x2
})
console.log(c)