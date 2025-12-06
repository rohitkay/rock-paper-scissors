console.log("Hello World");

function getComputerChoice(){
    let randomNumber = Math.random() * 10;
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

console.log(getComputerChoice());