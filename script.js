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

/*function getHumanChoice(){
    userInput = prompt("Please enter your choice:");
    return userInput;
}
*/

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
});

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click",()=>{
    playRound("paper",getComputerChoice());
});

const scissorButton = document.querySelector("#scissorButton");
scissorButton.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice());
});




function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    //console.log(`This is the human choice in lowercase ${humanChoice}`);

    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Its a tie!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock");
        computerScore = computerScore + 1;
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
        computerScore = computerScore + 1;
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
        computerScore = computerScore + 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats paper");
        humanScore = humanScore + 1;
    }

}



function playGame(){

    /*for (let i =0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }*/
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    if (computerScore>humanScore){
        console.log("You lost the full game!");
    }
    else if(computerScore < humanScore){
        console.log("You win the full game");
    }
    else{
        console.log("Its a tie for the full game!");
    }

}

/*console.log(getComputerChoice());
console.log(getHumanChoice());*/



//playGame();