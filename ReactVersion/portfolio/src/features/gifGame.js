const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];

function showGif() {
    const button = document.getElementById("game-button");
    button.removeEventListener("click", showGif);
    button.textContent = "See GIF";
    button.addEventListener("click", function () {
        const gif = document.createElement("img");
        gif.src = require("../img/ripper-snowboarder.gif");
        gif.alt = "Correct";
        button.parentNode.replaceChild(gif, button);
    });
}


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
        alert(`Winner! Snowboardings my favorite, it only took you ${numTries} tries!\n gotta win twice to see the Gif`);
    }; console.log(`${numTries}`);
}

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
        showGif();
    } return correct;
}


export default gifGame;