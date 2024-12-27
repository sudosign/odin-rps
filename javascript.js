document.addEventListener('DOMContentLoaded', () => {
    let humanScore = 0, computerScore = 0;

    function getComputerChoice(){
        return Math.floor(Math.random() * 3);
    }

    function playRound(humanChoice, computerChoice) {
        let result = '';
        switch(humanChoice) {
            case 0: // rock
                switch(computerChoice) {
                    case 0:
                        result = "Rock vs Rock = Tie!";
                        break;
                    case 1:
                        result = "You lost! Rock vs Paper";
                        break;
                    case 2:
                        result = "You won! Rock vs Scissors";
                        break;
                }
                break;
            case 1: // paper
                switch(computerChoice) {
                    case 0:
                        result = "You won! Paper vs Rock";
                        break;
                    case 1:
                        result = "Paper vs Paper = Tie!";
                        break;
                    case 2:
                        result = "You lost! Paper vs Scissors";
                        break;
                }
                break;
            case 2: // scissors
                switch(computerChoice) {
                    case 0:
                        result = "You lost! Scissors vs Rock";
                        break;
                    case 1:
                        result = "You won! Scissors vs Paper";
                        break;
                    case 2:
                        result = "Scissors vs Scissors = Tie!";
                        break;
                }
                break;
        }
        return result;
    }

    // Function to handle button clicks and game logic
    document.getElementById('rock-button').addEventListener('click', () => {
        const humanChoice = 0; // rock
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        document.getElementById('result').textContent = result;
    });

    document.getElementById('paper-button').addEventListener('click', () => {
        const humanChoice = 1; // paper
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        document.getElementById('result').textContent = result;
    });

    document.getElementById('scissors-button').addEventListener('click', () => {
        const humanChoice = 2; // scissors
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        document.getElementById('result').textContent = result;
    });
});
