function getComputerChoice() {
    const choiceArray = ["Rock", "Paper", "Scissors"]
    const randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]
    return randomChoice;
}

let playerScore = 0;
let computerScore = 0;
let roundResult;

const RockBtn = document.querySelector("#rock");
const ScissorsBtn = document.querySelector("#scissors");
const PaperBtn = document.querySelector("#paper");
const results = document.querySelector(".results");
const playScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");
const winner = document.querySelector(".winner");



RockBtn.addEventListener('click', () => handleMove("Rock"));
ScissorsBtn.addEventListener('click', () => handleMove("Scissors"));
PaperBtn.addEventListener('click', () => handleMove("Paper"));

function handleMove(selection) {
    const computerSelection = getComputerChoice();
    playRound(selection, computerSelection);
    results.textContent = roundResult;
    playScore.textContent = `Your score: ${playerScore}`;
    cpuScore.textContent = `Your score: ${computerScore}`;
    if (playerScore == 5) {
        winner.textContent = "You win!"
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        winner.textContent = "Computer wins! You suck!"
        playerScore = 0;
        computerScore = 0;
    }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundResult = "Draw!";
    } else if (
        (playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")
    ) { 
        computerScore++;
        roundResult = `${computerSelection} beats ${playerSelection}, you lose!`;
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        playerScore++;
        roundResult = `${playerSelection} beats ${computerSelection}, you win!`;
    }
}