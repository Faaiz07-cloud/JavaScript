console.log("Rock Paper Scissors");

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function decideWinner(userChoice, computerChoice) {
     if (userChoice == computerChoice){
        console.log("It's a tie!");
     }

     else if ((userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock") ||
        (userChoice == "scissors" && computerChoice == "paper")) {
            console.log("You win!");
     }

     else {
        console.log("Computer wins!");
     }
}

function playGame(userChoice){
    let computerChoice = getComputerChoice();
    console.log("Computer chose: " + computerChoice);
    userChoice = userChoice;
    console.log("You chose: " + userChoice);
    let result = decideWinner(userChoice, computerChoice);
}

playGame("scissors");