let humanScore = 0;
let computerScore = 0;

const hScorePara = document.querySelector('#human-score');
const cScorePara = document.querySelector('#computer-score');
const hSelecPara = document.querySelector('#human-selected');
const cSelecPata = document.querySelector('#computer-selected');

hScorePara.textContent = getHScoreText();
cScorePara.textContent = getCScoreText();

const btns = document.querySelectorAll('.human-choice');

btns.forEach(btn => {
    btn.addEventListener('click', playRound);
});

function getHScoreText() {
    return getScoreText(humanScore);
}

function getCScoreText() {
    return getScoreText(computerScore);
}

function getScoreText(score) {
    return `${score}`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function updateSelectionText(human, computer) {
    hSelecPara.textContent = capitalize(human);
    cSelecPata.textContent = capitalize(computer);
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound() {
    const humanChoice = this.id;
    const computerChoice = getComputerChoice();
    let result;

    // win
    if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock') {
        result = 0;
    // lose
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') { 
            result = 1; 
    // tie
    } else {
        result = 2;
    }

    updateSelectionText(humanChoice, computerChoice);
    updateScore(result);
}

function updateScore(result) {
    switch (result) {
        case 0:
            computerScore++;
            cScorePara.textContent = getCScoreText();
            break;
        case 1:
            humanScore++;
            hScorePara.textContent = getHScoreText();
            break;
    }

    if (humanScore === 5 || computerScore === 5) {
        endGame();
        return;
    }
}

function endGame() {
    btns.forEach(btn => {
        btn.removeEventListener('click', playRound);
    })
    displayGameResult();
}

function displayGameResult() {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const para = document.createElement('p');
    const btn = document.createElement('button');

    div.classList.add('game-result');
    para.textContent = humanScore === 5 ? 'You win!' : 'You lose!';
    btn.textContent = 'New Game';

    btn.addEventListener('click', newGame);

    div.append(para, btn);
    body.appendChild(div);
}

function newGame() {
    humanScore = 0
    computerScore = 0;
    hScorePara.textContent = getHScoreText();
    cScorePara.textContent = getCScoreText();
    hSelecPara.textContent = '';
    cSelecPata.textContent = '';
    
    const div = document.querySelector('.game-result');
    div.remove();
    btns.forEach(btn => {
        btn.addEventListener('click', playRound);
    });
}