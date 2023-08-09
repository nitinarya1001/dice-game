
var random0 = Math.floor(Math.random() * 6) + 1;
var random1 = Math.floor(Math.random() * 6) + 1;

if (random0 > random1) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";

}

else if (random0 < random1) {

    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {

    document.querySelector("h1").textContent = "Draw!";
}

document.getElementsByTagName("img")[0].setAttribute("src", "./Images/dice" + random0 + ".png");
document.getElementsByTagName("img")[1].setAttribute("src", "./Images/dice" + random1 + ".png");