//Exercise1 => Guess the Number

let num = Math.floor(Math.random() * 100)
num = Number.parseInt(num)
let chances = 0
let score = 100;
let a = readInt(prompt) //here this will not be able to work :(
while(a!=num){
    if(a==num){
        console.log("Congratulations!!Your Guess is Correct")
    }
    else if(a>num){
        console.log("Your Guess is Higher!. \nGuess Lower!!")
        chances++
    }
    else{
        console.log("Your Guess is Lower!. \nGuess Higher!!") 
        chances++
    }
}
console.log("Congratulations!!Your Guess is Correct")
console.log("Your Score = ", score-chances)
