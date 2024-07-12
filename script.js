const choices = ['rock','paper','scissor'];
const player = document.getElementById('playerDisplay');
const computer = document.getElementById('computerDisplay');
const result = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const ComputerScoreDisplay = document.getElementById('ComputerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function playgame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!";

    }
    else{
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE" ;
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE" ;
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE" ;
                break;

        }
    }

    playerDisplay.textContent = 'PLAYER: ${playerChoice}';
    computerDisplay.textContent = 'COMPUTER: ${computerChoice}';
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerScore++;
            ComputerScoreDisplay.textContent = computerScore;
            break;
    }
}