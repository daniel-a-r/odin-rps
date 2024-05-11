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

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

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