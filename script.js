
const rock = 0;
const paper = 1;
const scissors = 2;

const winningMove = [scissors, rock, paper];
const movesAsStrings = ["rock", "paper", "scissors"];
const movesNumber = 3;

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

}

console.log(getHumanChoice());

/*

1- you get three moves
2- the move is used as an index
3- the value of each index (move) represents the move it beats

*/