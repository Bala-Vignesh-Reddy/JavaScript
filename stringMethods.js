let name = "None"
console.log(name.length)	//returns the length of the string

console.log(name.toUpperCase())	//return the string in upper case

console.log(name.toLowerCase())	//return the string in lower case

console.log(name.slice(1,3)) //return the sliced string between given indexes

console.log(name.slice(1)) //return the remaining string from index 1 to end


let str1 = "hi"
let str2 = str1.replace("hi", "hello")	//replace the string or part of string
console.log(str2);

let str3 =  "bye"
console.log(str1.concat(str3,"!!"))	// used to concat the string(we can also use + operator)

let str4 = "      op     "
console.log(str4.trim())	//remove the spaces

//string are immutable. for accessing we use the indexes

