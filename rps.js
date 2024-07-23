
function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (val) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?").trim().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("Tied")
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats Scissors. You win");
        humanScore++;
    } else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("Rock loses to paper. You lose");
        computerScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats rock. You win");
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Paper loses to Scissors. You lose");
        computerScore++;
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats paper. You win");
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Scissors loses to Rock. You lose");
        computerScore++;
    } 
}
function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i <= 4; i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }
    console.log(humanScore,computerScore);
}