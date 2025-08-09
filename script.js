



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

let humanChoice = 0;
let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    return Math.floor((Math.random() * 10) % 3);
}

function playRound(computerChoice) {

    if (humanChoice != computerChoice) {

        if (winningMove[humanChoice] == computerChoice) {
            humanScore += 1;
            console.log("You Won! " + movesAsStrings[humanChoice] + " beats " + movesAsStrings[computerChoice] + " \n");
            
        }
        else {
            computerScore += 1;
            console.log("You Lost! " + movesAsStrings[humanChoice] + " loses to " + movesAsStrings[computerChoice] + " \n");
        }
    }
    else {
        console.log("It is a tie \n");
    }

}


/*
add the buttons
*/
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

/*
change their id to match the index
*/
rockBtn.setAttribute("id", rock.toString());
paperBtn.setAttribute("id", paper.toString());
scissorsBtn.setAttribute("id", scissors.toString());

/*
group them to add listeners at once
*/
const moveBtns = document.querySelectorAll(".moveBtn");
moveBtns.forEach(move => {
    move.addEventListener("click", (e) => {
        selectChoice(e.currentTarget.getAttribute("id"));
    })
})

/*
taking the choice of the player
*/
function selectChoice(c) {
    humanChoice = parseInt(c);
    playRound(getComputerChoice());
}