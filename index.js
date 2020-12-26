var randomnumber1=Math.floor(Math.random() * 6) + 1;

var diceimage1="images/dice" + randomnumber1 + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" , diceimage1);

var randomnumber2=Math.floor(Math.random() * 6) + 1;

var diceimage2="images/dice" + randomnumber2 + ".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src" , diceimage2);

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="player2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
