//Normal for Loop
let n = 5
let fact = 1;
for(let i = 1; i <= n; i++){
    fact*=i;
}
console.log("Fatorial of "+ n + " is: " +fact)


//For In Loop    this can be also used for array
let obj = {
    "Harry": 45,
    "bala" : 99
}
for(let a in obj){
    console.log("marks of " + a + " are " + obj[a])
}

//For of loop   -> the object should be iretable
for(let b of "Bala"){
    console.log(b)
}
