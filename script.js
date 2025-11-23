let getComputerChoice
let humanScore = 0
let computerScore = 0

let round = 1

function playRound() {

    console.log ("Round " + round + " is starting now: ")
    const getHumanChoice = prompt("Type rock, paper or scissors to play");
    const humanChoiceLowerCase = (getHumanChoice.toLowerCase());
    const randomNumber = Math.floor((Math.random() * 100 )+ 1);
    
    if (randomNumber < 33) {
        getComputerChoice="rock"
    }  else if (randomNumber <66) {
        getComputerChoice="paper"
    } else {
        getComputerChoice="scissors"
    }

    console.log("You have picked " + humanChoiceLowerCase + "...")
    console.log("...")
    console.log("And the ghost in the machine has picked " + getComputerChoice + "!")
    console.log("...")
    console.log("...")
    if (getComputerChoice ===  humanChoiceLowerCase){
        console.log("Draw, play again!")
        } else if (humanChoiceLowerCase==="rock" && getComputerChoice==="scissors"){
            console.log("Rock beats scissors! You win this round!")
            humanScore= humanScore + 1;
        } else if (humanChoiceLowerCase==="rock" && getComputerChoice==="paper"){
            computerScore= computerScore + 1;
            console.log("Unlucky! Paper beats rock. You lose this round.")
        } else if (humanChoiceLowerCase==="scissors" && getComputerChoice==="paper") {
            console.log("Scissors beats paper! You win this round!")
            humanScore= humanScore + 1;
        } else if (humanChoiceLowerCase==="paper" && getComputerChoice==="rock")  {
            console.log("Paper beats rock! You win this round!")
            humanScore= humanScore + 1;
        } else if (humanChoiceLowerCase==="scissors" && getComputerChoice==="rock") {
            computerScore= computerScore + 1;
            console.log("Unlucky! Rock beats scissors. You lose this round.")
        } else if (humanChoiceLowerCase==="paper" && getComputerChoice==="scissors") {
            computerScore= computerScore + 1;
            console.log("Unlucky! Scissors beats paper. You lose this round.")
        } else {
            console.log("I didn't understand your choice, pick again!")
        }
    console.log("Your score is " + humanScore)
    console.log("The ghost in the machine's score is " + computerScore) 
    console.log("Round " + round + " of 5 is over.")
    round = ++round;
}

// Below for loop plays 5 rounds 

for (let i = 1; i < 6; i++) {
    playRound ();
}

if (humanScore > computerScore) {
    console.log("Game over! You win!")
} else if (humanScore < computerScore) {
    console.log("Game over. You lose!")
} else {
    console.log("It's a draw. What are the chances!")
}
