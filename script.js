



/*

1- you get three moves
2- the move is used as an index
3- the value of each index (move) represents the move the index beats

*/
const rock = 0;
const paper = 1;
const scissors = 2;

const winningMove = [scissors, rock, paper];
const movesNumber = 3;

const movesAsStrings = ["rock", "paper", "scissors"];

const roundsNumber = 5;


let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {

    let choice = prompt("Rock-Paper-Scissors").toLowerCase();

    for (let i = 0; i < movesNumber; i += 1) {
        if (choice == movesAsStrings[i]) {
            return i;
        }
    }
}

function getComputerChoice() {
    return Math.floor((Math.random() * 10) % 3);
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice != computerChoice) {

        if (winningMove[humanChoice] == computerChoice) {
            humanScore += 1;
            console.log("You Won! " + movesAsStrings[humanChoice] + " beats " + movesAsStrings[computerChoice] + " \n");
            
        }
        else {
            computerScore += 1;
            console.log("You Lost! " + movesAsStrings[computerChoice] + " beats " + movesAsStrings[humanChoice] + " \n");
        }
    }
    else {
        console.log("It is a tie \n");
    }

}

function playGame() {

    for (let i = 0; i < roundsNumber; i += 1) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You Won!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost");
    }
    else {
        console.log("It is a tie");
    }

}

playGame();

