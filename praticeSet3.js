//1.write a program to print the marks of a student in an object using for loop
//obj = { harry:98, rohan:70, aakash:7}
let marks = {
	harry: 98,
	rohan:56,
	monika:4
}
for(let i=0;i<Object.keys(marks).length;i++){
	console.log("The marks of " + Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]])
}
console.log()
//problem 2 using for in loop
for(let key in marks){
	console.log("The marks of "+ key + " are " + marks[key])
}


//problem no 3
//Write a function to find mean of 5 numbers

function mean(a,b,c,d,e){
	return a+b+c+d+e/4
}
console.log("Mean of 5 numbers = ",mean(1,2,3,4,5))
