let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, target) => {
    /*
    Determines which player (human or computer wins)
    based on which guess is closest to the target. If both 
    players are tied, the human user should win
    */

    //if human is closer or there is a tie
    if (Math.abs(human - target) <= Math.abs(computer - target)) {
        return true;
    } 
    //else the computer wins
    else {
        return false;
    }
}

