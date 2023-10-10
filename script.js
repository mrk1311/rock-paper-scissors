let playerSelection = null;
let round = 1;
let playerScore = 0;
let computerScore = 0;

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

const resultContainer = document.querySelector('#result');
var resultText = document.createElement('p');

const scoreboard = document.querySelector('#score');
var scoreText = document.createElement('p');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];   
};

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
}

function game() {

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener(('click'), () => {
            score();
            console.log(playerSelection);
        });
    });
}

function score() {

    let roundResult;
    let computerSelection;
    let result;
    let roundText = document.createElement('p');

    if (playerScore < 5 && computerScore < 5) {
        computerSelection = getComputerChoice();
        roundResult = resultText.textContent;
        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }
        result = `Round ${round}: ${roundResult} Score: ${playerScore}-${computerScore}`;
        scoreText.textContent = (result);
        scoreboard.appendChild(scoreText);
        console.log(result);
        round++;
    } else {

        resultText.textContent = ('Game over!');

        if (playerScore > computerScore) {
            console.log('You win!');
        } else if (computerScore > playerScore) {
            console.log('You lose!');
        } else {
            console.log('Tie!');
        }
    
    }

}

game();