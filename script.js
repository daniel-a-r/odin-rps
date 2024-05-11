playGame();

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

function getHumanChoice() {
    let humanChoice;
    
    while (true) {
        humanChoice = prompt('Enter "rock", "paper", or "scissors".');
        humanChoice = humanChoice.toLowerCase().trim();

        if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
            alert("Invalid choice.");
        } else {
            break;
        }
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
        return 0;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' 
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper') { 
        return 1; 
    } else {
        return 2;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        let roundString = `Round ${i + 1}`;

        switch (playRound(humanChoice, computerChoice)) {
            case 0:
                ++computerScore;
                alert(`${roundString}: You lose, ${computerChoice} beats ${humanChoice}!\nYou: ${humanScore}     Computer: ${computerScore}`);
                break;
            case 1:
                ++humanScore;
                alert(`${roundString}: You win, ${humanChoice} beats ${computerChoice}!\nYou: ${humanScore}    Computer: ${computerScore}`);
                break;
            case 2:
                alert(`${roundString}: It's a tie!\nYou: ${humanScore}    Computer: ${computerScore}`);
                break;
        }
    }
}