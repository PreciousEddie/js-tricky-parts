function guessingGame() {
    let randomNum = Math.floor(Math.random() * 100);
    let numGuesses = 0;
    let gameEnded = false;
    return function guess(number) {
        if (gameEnded)
            return "The game is over, you already won!";
        numGuesses++;
        if (number < randomNum) {
            return `${number} is too low!`;
        } else if (number > randomNum) {
            return `${number} is too high!`;
        } else {
            gameEnded = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${randomNum} in ${numGuesses} ${guess}.`;
        }
    }
}

module.exports = { guessingGame };
