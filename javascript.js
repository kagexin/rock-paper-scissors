function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"]
    const randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]
    return randomChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw!";
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")
    ) { 
        computerScore++;
        return `${computerSelection} beats ${playerSelection}, you lose!`
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore++;
        return `${playerSelection} beats ${computerSelection}, you win!`
    } else return "Invalid choice";
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        return "You won!";
    } else return "You're dookie at this!";
}

console.log(game())
