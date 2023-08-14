computerScore = 0;
playerScore = 0;
let maxScore = 5;

function playRound(playerSelection, computerSelection) {
    let displayText;

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            displayText = "Computer chose Rock. It's a tie";
        }
        else if (computerSelection.toLowerCase() == "paper") {
            displayText = "Computer chose Paper. You Lose!";
            computerScore++;
        }
        else {
            displayText = "Compuer chose Scissors. You Win!";
            playerScore++;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            displayText = "Computer chose Rock. You Win!";
            playerScore++;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            displayText = "Computer chose Paper. It's a tie";
        }
        else {
            displayText = "Computer chose Scissors. You Lose!";
            computerScore++;
        }
    }
    else {
        if (computerSelection.toLowerCase() == "rock") {
            displayText = "Computer chose Scissors. You Lose!";
            computerScore++;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            displayText = "Computer chose Paper. You Win!";
            playerScore++;
        }
        else {
            displayText = "Computer chose Scissors. It's a tie";
        }
    }

    const pScore = document.querySelector('.player-score');
    const cScore = document.querySelector('.computer-score');

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    return displayText;
}

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors']
    const index = Math.floor(Math.random() * 3);

    return choice[index];
}


document.getElementById("rock").addEventListener("click", function() {
    if (playerScore < maxScore && computerScore < maxScore) {
        playerSelection = "rock";
        computerSelection = getComputerChoice();

        const displayText = document.querySelector('.display-text');
        displayText.textContent = playRound(playerSelection, computerSelection);
        checkGameEnd();
    }
});
  
document.getElementById("paper").addEventListener("click", function() {
    if (playerScore < maxScore && computerScore < maxScore) {
        playerSelection = "paper";
        computerSelection = getComputerChoice();

        const displayText = document.querySelector('.display-text');
        displayText.textContent = playRound(playerSelection, computerSelection);
        checkGameEnd();
    }
});

document.getElementById("scissors").addEventListener("click", function() {
    if (playerScore < maxScore && computerScore < maxScore) {
        playerSelection = "scissors";
        computerSelection = getComputerChoice();

        const displayText = document.querySelector('.display-text');
        displayText.textContent = playRound(playerSelection, computerSelection);
        checkGameEnd();
    }
});

function reset() {
    playerScore = 0;
    computerScore = 0;

    const pScore = document.querySelector('.player-score');
    const cScore = document.querySelector('.computer-score');

    pScore.textContent = 0;
    cScore.textContent = 0;
}


function checkGameEnd() {
    if (computerScore === 5) {
        const displayText = document.querySelector('.display-text');

        const lineBreak = document.createElement("br");
        displayText.appendChild(lineBreak);
        const additionalText = document.createTextNode("You Lose! Better Luck next time :( GAME RESTARTED");
        displayText.appendChild(additionalText);

        reset();
    }
    else if (playerScore === 5) {
        const displayText = document.querySelector('.display-text');

        const lineBreak = document.createElement("br");
        displayText.appendChild(lineBreak);
        const additionalText = document.createTextNode("CONGRATS!! YOU WIN. GAME RESTARTED");
        displayText.appendChild(additionalText);

        reset();
    }
}





