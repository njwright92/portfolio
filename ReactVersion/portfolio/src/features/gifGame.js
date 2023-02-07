const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];

function gifGame() {
    let guess;
    let numTries = 0;
    let correct = false;
    do {
        guess = prompt(`which one is my favorite sport?\n\n${favoriteSport.join(", ")}`);
        numTries += 1;
        if (guess === null) {
            alert("game aborted");
            return
        } correct = checkGuess(guess.toLowerCase().trim());
        // eslint-disable-next-line
    } while (!correct) {
        alert(`Winner! Snowboardings my favorite, it only took you ${numTries} tries! win again to see the Gif`);
        showGif();
    }; console.log(`${numTries}`);
}


function showGif() {
    const button = document.getElementById("game-button");
    button.addEventListener("click", function () {
        const gif = document.createElement("img");
        gif.src = require("../img/ripper-snowboarder.gif");
        gif.alt = "Correct";
        button.parentNode.replaceChild(gif, button);
    });
    // const img = document.createElement("img");
    // img.src = require("../img/ripper-snowboarder.gif");
    // const gif_game = document.getElementById("gif_game");
    // gif_game.appendChild(img);
};

function checkGuess(guess) {
    let correct = false;
    console.log(guess);
    if (!favoriteSport.includes(guess)) {
        alert("Your guess is not one of the choices.")
    } else if (guess === "baseball") {
        alert("Incorrect guess again.");
    } else if (guess === "football") {
        alert("Not even close dummy.");
    } else if (guess === "skateboarding") {
        alert("wrong guess again.");
    } else {
        correct = true;
    } return correct;
}

export default gifGame;