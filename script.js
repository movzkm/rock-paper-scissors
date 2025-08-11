



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


const winningScore = 5;
let humanChoice = 0;
let humanScore = 0;
let computerScore = 0;
let allowedToPlay = true;

const computerScoreField = document.querySelector("#computerScore");
const humanScoreField = document.querySelector("#humanScore");
const finalResult = document.querySelector("#finalResult");
const computerChoiceField = document.querySelector("#computerChoice");
const humanChoiceField = document.querySelector("#humanChoice");

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
    if (allowedToPlay) {
        let cInt = parseInt(c);
        humanChoice = cInt;
        humanChoiceField.textContent = "Your Choice : " + movesAsStrings[cInt];
        playRound(getComputerChoice());
    }
}

function announceWinner() {
    if (computerScore > humanScore) {
        finalResult.textContent = "YOU LOST!";
    }
    else {
        finalResult.textContent = "YOU WON!";
    }
}

function getComputerChoice() {
    let cChoice = Math.floor((Math.random() * 10) % 3);
    computerChoiceField.textContent = "Computer Choice : " + movesAsStrings[cChoice].toString();
    return cChoice;
}

function playRound(computerChoice) {

    if (humanChoice != computerChoice) {

        if (winningMove[humanChoice] == computerChoice) {
            humanScore += 1;
            humanScoreField.textContent = "Your Score : " + humanScore.toString();
        }
        else {
            computerScore += 1;
            computerScoreField.textContent = "Computer Score : " + computerScore.toString();
        }
    }
    if (humanScore == winningScore || computerScore == winningScore) {
        announceWinner();
        allowedToPlay = false;
    }

}