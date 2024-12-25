// 0: rock
// 1: paper
// 2: scissors

let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    let choice = prompt("Rock, paper, or scissors: ").toLowerCase();
    if (choice == "rock") return 0;
    else if (choice == "paper") return 1;
    else if (choice == "scissors") return 2;
    else {
        return ("bruh");
    }
    return prompt("Rock, paper, or scissors: ");
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice){
        case 0:
            switch(computerChoice){
                case 0:
                    return ("Rock vs Rock = Tie!");
                    break;
                case 1:
                    return ("You lost! Rock vs Paper");
                    break;
                case 2:
                    return ("You won! Rock vs scissors");
                    break;
            }
            break;
        case 1:
            switch(computerChoice){
                case 0:
                    return ("You won! Paper vs rock");
                    break;
                case 1:
                    return ("Paper vs Paper = Tie!");
                    break;
                case 2:
                    return ("You lost! Paper vs scissors");
                    break;
            }
            break;
        case 2:
            switch(computerChoice){
                case 0:
                    return ("You lost! Scissors vs rock");
                    break;
                case 1:
                    return ("You won! Scissor vs Paper");
                    break;
                case 2:
                    return ("Scissor vs scissor = Tie!");
                    break;
            }
            break;
    }
}
  
function playGame(){
    for (let i = 0; i<5;i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
}


playGame();