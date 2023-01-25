//1. Create  a variable of type and try to add it with a number.
let a = "bala"
let b = 5
let c = a+b
console.log(c)

//2. Use typeof operator to find the datatype of the string in last question
console.log(typeof c)

//3. create a const object in js. can you change it to hold a number later
//-> No we can't change a once it is declared
const a1 = {
    name: "bala"
}

//4. try to add a new key to the const object in problem 3 were you will be able to do it
a1['friend'] = "dax"
a1['number'] = 9343151334
console.log(a1)


//5. write a js program to create a word meaning phone dict of 5 persons
const item = {
    "harry" : 8476240672,
    "bala" : 9870728527
}
console.log(item["tavish"])
console.log(item.harry) // same as above