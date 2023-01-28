//Map , Filter and Reduce are the higher array methods
//map() => This creates a new array by performing some operation on each array element
let a = [23,12,10]
let b = a.map((value, index, array) => {
    console.log(value, index, array)
    return value + 1
})
console.log(b)

//filter()
let arr = [25,3,10,2,99]
let a1 = arr.filter((value)=> {
    return value<10
})
console.log(a1)

//reduce() => simply it will return the sum of the array ele    
let arr2 =[1,2,3,4,5]
let arr3 = arr2.reduce((a,b)=>{
    return a+b
})
console.log(arr3)