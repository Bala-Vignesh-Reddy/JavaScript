let a = 3
let b = 4
let c = 5

function sum(a,b,c){
	return a + b + c
}

function average(sum,n){
	let sum1 = sum(a,b,c)
	let avg = sum1/3
	return avg
}
console.log("Sum of three numbers: ",sum(a,b,c))
console.log("Average of three numbers: ", average(sum,3))

//new  way to write function is
const sum2 = (a,b)=>{
	return a+b
}
console.log(sum2(10,5))

