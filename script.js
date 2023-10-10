let round = 1;
let playerScore = 0;
let computerScore = 0;

// listen to buttons clicks and play a round with the player's choice

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

// some containers for the results

const resultContainer = document.querySelector('#result');
var resultText = document.createElement('p');

const finalResult = document.createElement('p');

const scoreboard = document.querySelector('#scoreboard');
var scoreText = document.createElement('p');

// reset button
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    reset();
});

// get a random choice for the computer

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];   
};

// play a round and update the result of the round

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        resultText.textContent = ('Tie!');
        resultContainer.appendChild(resultText);
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            resultText.textContent = ('You lose! Paper beats rock.');
            resultContainer.appendChild(resultText);
        } else {
            resultText.textContent = ('You win! Rock beats scissors.');
            resultContainer.appendChild(resultText);
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            resultText.textContent = ('You win! Paper beats rock.');
            resultContainer.appendChild(resultText);
        } else {
            resultText.textContent = ('You lose! Scissors beat paper.');
            resultContainer.appendChild(resultText);
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            resultText.textContent = ('You lose! Rock beats scissors.');
            resultContainer.appendChild(resultText);
        } else {
            resultText.textContent = ('You win! Scissors beat paper.');
            resultContainer.appendChild(resultText);
        }
    }

    game();
}

// keep track of the score and display the final result

function game() {

    let roundResult;
    let result;
    let scoreText = document.createElement('p');
    

    if (playerScore < 5 && computerScore < 5) {
        roundResult = resultText.textContent;
        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }
        result = `Round ${round}: ${roundResult} Score: ${playerScore}-${computerScore}`;
        scoreText.textContent = (result);
        scoreboard.insertBefore(scoreText, scoreboard.firstChild);
        round++;
    }

    if (playerScore === 5 || computerScore === 5) {
        resultText.textContent = ('Game over!');
        resultContainer.appendChild(resultText);

        if (playerScore > computerScore) {
            finalResult.textContent = ('You win!');
        } else if (computerScore > playerScore) {
            finalResult.textContent = ('You lose!');
        } else {
            finalResult.textContent = ('Tie!');
        }
        resultContainer.appendChild(finalResult);

        resetButton.classList.remove('hidden');

    } 
}

function reset() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = ('');
    finalResult.textContent = ('');
    scoreboard.textContent = ('');
    resetButton.classList.add('hidden');
}