const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];
favoriteSport.sort();
function getSport()  {
    let guess = "snowboarding";
    let numTries = 0;
    let correct = false;
    const target = "snowboarding";

    console.log(target);

        do  {
            guess = prompt("what is my favorite sport? you have 3 guesses\n\n" + favoriteSport.join(', '));
            numTries += 1;
            if (guess === null) {
                alert("game aborted");
                return
            } correct = checkGuess(guess, target)
        } while (!correct)  {
            alert("finally you chose wisely \n it took you " + numTries + " tries to guess correctly");
            showGif();
        }
}

function checkGuess(guess)  {
    let correct = false;
    console.log(guess);
    if (!favoriteSport.includes(guess))  {
        alert("your guess is not in the options")
    } else if (guess === "baseball")  {
        alert("incorrect guess again");
    } else if (guess === "football")  {
        alert("not even close dummy");
    } else if (guess === "skateboarding")  {
        alert("wrong guess again");
    } else {
        correct = true;
    } return correct;
}

function showGif()  {
    const img = document.createElement("img");
    img.src = "images/ripper-snowboarder.gif";
    document.body.appendChild(img);
}