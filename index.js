var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; 
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);




var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);






if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins Thankyou!!"}
else if (randomNumber1<randomNumber2)
{document.querySelector("h1").innerHTML="Player2 wins Thankyou!!!"}

else{document.querySelector("h1").innerHTML="Draw Oops!! Roll Again!"}
