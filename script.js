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
    
}

console.log(getComputerChoice());
console.log(getHumanChoice());
