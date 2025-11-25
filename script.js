let getComputerChoice
let humanScore = 0
let computerScore = 0
let gameOver = false;

let round = 1


const rockButton = document.querySelector("#humanSelectedRock");
rockButton.addEventListener("click", rockSelected);

const paperButton = document.querySelector("#humanSelectedPaper");
paperButton.addEventListener("click", paperSelected);

const scissorsButton = document.querySelector("#humanSelectedScissors");
scissorsButton.addEventListener("click", scissorsSelected);

function rockSelected() {
    if (gameOver) return;
    humanChoiceLowerCase = "rock";
    console.log("Player selected " + humanChoiceLowerCase);
    playRound()
}

function paperSelected() {
    if (gameOver) return;
    humanChoiceLowerCase = "paper";
    console.log("Player selected " + humanChoiceLowerCase);
    playRound()
}

function scissorsSelected() {
    if (gameOver) return;
    humanChoiceLowerCase = "scissors";
    console.log("Player selected " + humanChoiceLowerCase);
    playRound()
}

function showHumanSelection() {
    const playerSelectionDiv = document.querySelector("#humanSelection");
    playerSelectionDiv.textContent = "Player selected " + humanChoiceLowerCase;
}

function showComputerSelection() {
    const computerSelectionDiv = document.querySelector("#computerSelection");
    computerSelectionDiv.textContent = "Computer selected " + getComputerChoice;
}

function roundCounterDisplay() {
    const roundCounterDiv = document.querySelector("#roundCounter");
    roundCounterDiv.textContent = "Round " + round;
}

function humanScoreDisplay() {
    const playerScoreDiv = document.querySelector("#humanScore");
    playerScoreDiv.textContent = "Player score: " + humanScore;
}

function computerScoreDisplay() {
    const computerScoreDiv = document.querySelector("#computerScore");
    computerScoreDiv.textContent = "Computer score: " + computerScore;
}




function playRound() {

    const randomNumber = Math.floor((Math.random() * 100) + 1);

    if (randomNumber < 33) {
        getComputerChoice = "rock"
    } else if (randomNumber < 66) {
        getComputerChoice = "paper"
    } else {
        getComputerChoice = "scissors"
    }

    showHumanSelection();
    showComputerSelection();
    roundCounterDisplay();

    if (getComputerChoice === humanChoiceLowerCase) {
        console.log("Draw, play again!")
    } else if (humanChoiceLowerCase === "rock" && getComputerChoice === "scissors") {
        console.log("Rock beats scissors! You win this round!")
        humanScore = humanScore + 1;
    } else if (humanChoiceLowerCase === "rock" && getComputerChoice === "paper") {
        computerScore = computerScore + 1;
        console.log("Unlucky! Paper beats rock. You lose this round.")
    } else if (humanChoiceLowerCase === "scissors" && getComputerChoice === "paper") {
        console.log("Scissors beats paper! You win this round!")
        humanScore = humanScore + 1;
    } else if (humanChoiceLowerCase === "paper" && getComputerChoice === "rock") {
        console.log("Paper beats rock! You win this round!")
        humanScore = humanScore + 1;
    } else if (humanChoiceLowerCase === "scissors" && getComputerChoice === "rock") {
        computerScore = computerScore + 1;
        console.log("Unlucky! Rock beats scissors. You lose this round.")
    } else if (humanChoiceLowerCase === "paper" && getComputerChoice === "scissors") {
        computerScore = computerScore + 1;
        console.log("Unlucky! Scissors beats paper. You lose this round.")
    } else {
        console.log("I didn't understand your choice, pick again!")
    }
    console.log("Your score is " + humanScore)
    console.log("The ghost in the machine's score is " + computerScore)
    console.log("Round " + round + " is over.")
    round = ++round;

    humanScoreDisplay();
    computerScoreDisplay();

    // End game
    if (humanScore >= 5) {
        gameOver = true;

        const gameResultDiv = document.querySelector("#gameResult");
        gameResultDiv.textContent = "You win! Final score:";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } else if (computerScore >= 5) {
        gameOver = true;

        const gameResultDiv = document.querySelector("#gameResult");
        gameResultDiv.textContent = "You lose! Final score:";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}