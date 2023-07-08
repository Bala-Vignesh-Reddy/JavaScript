document.getElementById("btn").addEventListener("click", function(){
    location.reload();
});

let randomNumber1 = Math.round(Math.random()*5)+1;

let randomDiceImg = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomDiceImg;

document.querySelector("#leftdice").setAttribute("src", randomImageSource);

let randomNumber2 = Math.round(Math.random()*5)+1;
let randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelector("#rightdice").setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}else{
    document.querySelector("h1").innerHTML = "Draw!!";
}