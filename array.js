//Arrays
let a = [1,2,3]
//in JS we can insert different types of datatypes in single array
console.log(a.length)
a[2] = 99;
console.log(a)
//typeof array is object
console.log(typeof a)

//Methods of array
let num = [1,2,3,4]

//1. converting the array into string
let b = num.toString()
console.log(b)

//2. join function joins the array ele with sep
let c = num.join("#")
console.log(c)

//3. pop() removes the last element
num.pop()
console.log(num)

// 4. push() add a new element at the end of array
num.push(5)
console.log(num)

// 5. shift() removes the first element and return its 
// 6. unshift() add the element to the beginning. return new array length
// 7. delete array element can be deleted using the delete operator
// 8. concat() used to join array to the given array 
// let a1 = [9,10]
// a1.concat(num)// doesn't change the existing array
// console.log(a1)

// 9. sort() this method is used to sort array alphabetically
let b1 = [9,2,4]
b1.sort()
console.log(b1)

// we can use compare function in array to sort in ascending and descending order
let compare = (a,b) => {
    // return a - b //for ascending order
    return b - a //for descending order
}
b1.sort(compare)
console.log(b1)

// spice() function used to add new items to an Array
//spice(a,b,new elements) here a-> indexes and b -> no. of ele to be removed

//slice() out a piece from an array. It creates a new array