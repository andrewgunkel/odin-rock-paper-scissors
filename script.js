// Generates a random number between 1 and 100
randomNumber = 
    Math.floor((Math.random() * 100 )+ 1);

let getComputerChoice

//console.log(randomNumber)

if (randomNumber < 33) {
    getComputerChoice="Rock"
    console.log("The computer has picked rock!")
 }  else if (randomNumber <66) {
    getComputerChoice="Paper"
    console.log("The computer has picked paper!")
    } else {
        getComputerChoice="Scissors"
        console.log("The computer has picked scissors!")
    }

console.log(getComputerChoice)