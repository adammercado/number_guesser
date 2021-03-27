let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/*
generateTarget() takes no inputs and returns a random integer
between 0 and 9.
*/
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

/*
compareGuesses() takes the human guess, the computer guess and
the target value as inputs and returns who won based off of who
was closer to the target value. If there is a tie, the human 
automatically wins.
*/
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

/*
updateScore() takes a string as an input representing 'human' or 
'computer' and updates the score by 1 point based off of which player
was passed in as an argument.
*/
const updateScore = winner => {
    //if winner is human
    if (winner === 'human') {
        humanScore++;
    }

    //if winner is computer
    if (winner === 'computer') {
        computerScore++;
    }

}

const advanceRound = () => {
    currentRoundNumber++;
}





