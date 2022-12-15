function showGif()  {
    const img = document.createElement("img");
    img.src = "images/ripper-snowboarder.gif";
    document.body.appendChild(img);
}

const favoriteSport = ["baseball", "football", "skateboarding", "snowboarding"];
favoriteSport.sort();
function getSport()  {
    let guess = "snowboarding";
    let numTries = 0;
    let correct = false;
    const target = "snowboarding";
    console.log(target);
        do  {
            guess = prompt(`what is my favorite sport? Your options are \n\n ${favoriteSport.join(" , ")}`);
            numTries += 1;
            if (guess === null) {
                alert("game aborted");
                return
            } correct = checkGuess(guess, target);
        } while (!correct)  {
            alert(`Finally you chose wisely.\n It took you ${numTries} to guess correctly! \n Scroll to bottom to checkout prize!`);
            showGif();
        }
}

function checkGuess(guess)  {
    let correct = false;
    console.log(guess);
    if (!favoriteSport.includes(guess))  {
        alert("Your guess is not in the options.")
    } else if (guess === "baseball")  {
        alert("incorIect guess again.");
    } else if (guess === "football")  {
        alert("Not even close dummy.");
    } else if (guess === "skateboarding")  {
        alert("wrong guess again.");
    } else {
        correct = true;
    } return correct;
}