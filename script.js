// Generates a random number between 1 and 100


let getComputerChoice
let humanScore = 0
let computerScore = 0
//let getHumanChoice = "Rock";
let round = 1

console.log(round)

//if (getComputerChoice != null && getHumanChoice.length !== 0) {
   // 
   //console.log(getHumanChoice);
  // console.log(HumanScoreLowerCase)

//console.log(randomNumber)

// function computerChoice() {
//    if (randomNumber < 33) {
//    getComputerChoice="rock"
//    
// }  else if (randomNumber <66) {
//    getComputerChoice="paper"
//    } else {
//        getComputerChoice="scissors"
 //   }
// }

function humanChoice() {
    
return humanChoiceLowerCase
}

//console.log(getComputerChoice)
//console.log(getHumanChoice.toLowerCase());

function playRound() {

    console.log ("Round " + round + " is starting now: ")
    let getHumanChoice = prompt("Type rock, paper or scissors to play");
let humanChoiceLowerCase = (getHumanChoice.toLowerCase());
    let randomNumber = Math.floor((Math.random() * 100 )+ 1);
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
    } else if (humanChoiceLowerCase=="rock" && getComputerChoice=="scissors"){
        console.log("Rock beats scissors! You win this round!")
        humanScore= humanScore + 1;
    } else if (humanChoiceLowerCase=="rock" && getComputerChoice=="paper"){
        computerScore= computerScore + 1;
        console.log("Unlucky! Paper beats rock. You lose this round.")
    } else if (humanChoiceLowerCase=="scissors" && getComputerChoice=="paper") {
        console.log("Scissors beats paper! You win this round!")
        humanScore= humanScore + 1;
    } else if (humanChoiceLowerCase=="paper" && getComputerChoice=="rock")  {
        console.log("Paper beats rock! You win this round!")
        humanScore= humanScore + 1;
    } else if (humanChoiceLowerCase=="scissors" && getComputerChoice=="rock") {
        computerScore= computerScore + 1;
        console.log("Unlucky! Rock beats scissors. You lose this round.")
    } else if (humanChoiceLowerCase=="scissors" && getComputerChoice=="paper") {
        computerScore= computerScore + 1;
        console.log("Unlucky! Scissors beats paper. You lose this round.")
    } else {
        console.log("I didn't understand your choice, pick again!")
    }
    console.log("Your score is " + humanScore)
console.log("The ghost in the machine's score is " + computerScore) 
console.log("Round " + round + " of 5 is over.")
round = round++;
}


//function playGame () {
//    if (round==5 && (humanScore < computerScore)) {
//        console.log("Game over. You win!")
//    } else if (round=5 && (computerScore < humanScore)) { 
//        "Game over. The ghost in the machine wins this game."
//    } else {
//        playRound ();
//        return humanScore
//        return computerScore
//    }}

for (let round = 1; round <6; round++) {

playRound ();

}