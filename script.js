function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];   
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats rock.';
        } else {
            return 'You lose! Scissors beats paper.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else {
            return 'You win! Scissors beats paper.';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    let playerSelection;
    let computerSelection;
    let result;
    let round = 1;
    
    while (round <= 5) {
        playerSelection = prompt('Rock, paper, or scissors?');
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }
        result = `Round ${round}: ${roundResult} Score: ${playerScore}-${computerScore}`;
        console.log(result);
        round++;
    }
    
    if (playerScore > computerScore) {
        console.log('You win!');
    } else if (computerScore > playerScore) {
        console.log('You lose!');
    } else {
        console.log('Tie!');
    }
}

game();