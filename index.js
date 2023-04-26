// FIRST TRY with an array


// var randomNumber1 = Math.floor(Math.random()*6);
// var randomNumber2 = Math.floor(Math.random()*6);

// var kocki = [];

// var image1 = new Image();
// image1.src = "images/dice1.png";
// kocki.push(image1);

// var image2 = new Image();
// image2.src = "images/dice2.png";
// kocki.push(image2);

// var image3 = new Image();
// image3.src = "images/dice3.png";
// kocki.push(image3);

// var image4 = new Image();
// image4.src = "images/dice4.png";
// kocki.push(image4);

// var image5 = new Image();
// image5.src = "images/dice5.png";
// kocki.push(image5);

// var image6 = new Image();
// image6.src = "images/dice6.png";
// kocki.push(image6);

// var result1 = kocki[randomNumber1];
// var result2 = kocki[randomNumber2];

// document.querySelector("img.img1").setAttribute("src", result1.src);
// document.querySelector("img.img2").setAttribute("src", result2.src);


// SECOND TRY

var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var randomImage1 = "images/dice"+(randomNumber1+1)+".png";
var randomImage2 = "images/dice"+(randomNumber2+1)+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

//heading

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
    document.querySelector("h1").style.textAlign = "left";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML="Draw";
    document.querySelector("h1").style.textAlign = "center";
} else {
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
    document.querySelector("h1").style.textAlign = "right";
}
