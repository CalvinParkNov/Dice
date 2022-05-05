const randomNumber = Math.floor(Math.random() * 6 )+ 1;

const randomNumber2 = Math.floor(Math.random() * 6 )+ 1;


const randomDiceImage = "dice" + randomNumber + ".png";

const randomImageSource = "images/" + randomDiceImage;

const image1 = document.querySelectorAll("img")[0];

const randomDiceImage2 = "dice" + randomNumber2 + ".png";

const randomImageSource2 = "images/" + randomDiceImage2;

const image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);

image2.setAttribute("src", randomImageSource2);