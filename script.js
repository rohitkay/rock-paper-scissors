console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.random() * 100;
    console.log(randomNumber);
    if (randomNumber <= 33.33){
        return "rock";
    } 
    else if (randomNumber <= 66.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    userInput = prompt("Please enter your choice:");
    return userInput;
}


function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    console.log(`This is the human choice in lowercase ${humanChoice}`);

    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Its a tie!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock");
        computerscore = computerScore + 1;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors");
        humanScore = humanScore + 1;
    }
    

    else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Its a tie!");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper");
        computerscore = computerScore + 1;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock");
        humanScore = humanScore + 1;
    }


    else if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Its a tie!");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors");
        computerscore = computerScore + 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats paper");
        humanScore = humanScore + 1;
    }



}

/*console.log(getComputerChoice());
console.log(getHumanChoice());*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);