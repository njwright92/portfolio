const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];

function gifGame() {
    let guess;
    let numTries = 0;
    let correct = false;
    console.log();
    do {
        guess = prompt(`which one is my favorite sport?\n\n${favoriteSport.join(", ")}`);
        numTries += 1;
        if (guess === null) {
            alert("game aborted");
            return
        } correct = checkGuess(guess.toLowerCase().trim());
    } while (!correct) {
        alert(`Winner! Snowboardings my favorite, it only took you ${numTries} tries!`);
        <img className="img-fluid img-thumbnail App-logo"
            alt="ripper"
            src={require('../img/ripper-snowboarder.gif')}
            style={{
                height: 100
            }}
        />
    }
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
    } return correct;
}

export default gifGame;