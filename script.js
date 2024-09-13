function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const humanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);
        document.getElementById('result').innerHTML += `<p>${roundResult}</p>`;
    }

    if (humanScore > computerScore) {
        document.getElementById('result').innerHTML += `<p>You win the game! Final score: You ${humanScore} - Computer ${computerScore}</p>`;
    } else if (humanScore < computerScore) {
        document.getElementById('result').innerHTML += `<p>You lose the game! Final score: You ${humanScore} - Computer ${computerScore}</p>`;
    } else {
        document.getElementById('result').innerHTML += `<p>It's a tie! Final score: You ${humanScore} - Computer ${computerScore}</p>`;
    }
}

document.getElementById('playButton').addEventListener('click', playGame);