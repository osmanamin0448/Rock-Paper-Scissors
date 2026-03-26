//step 2
function getComputerChoice(){
  result = Math.floor(Math.random() * 3);

  if(result === 0){
    return "rock";
  }else if(result === 1){
    return "paper";
  }else if(result == 2){
    return "scissors";
  }
}
//console.log(getComputerChoice());


//step3
//Ask user for their choice
function getHumanChoice(){
  let userInput = prompt("We are playing rock paper scissors: 3,2,1 GO!!");
  return userInput;
}
//console.log(getHumanChoice());


//step 4
let humanScore = 0;
let computerScore = 0;


//step5
function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if(humanChoice === "rock" && computerChoice === "paper" ){
    computerScore++;
    console.log("You lose Paper beats Scissors");
  }
  else if(humanChoice === "paper" && computerChoice === "scissors" ){
    computerScore++;
    console.log("You lose Scissors beats paper");
  }
  else if(humanChoice === "scissors" && computerChoice === "rock" ){
    computerScore++;
    console.log("You lose Rock beats Scissors");
  }
  
}

playRound(getHumanChoice(), getComputerChoice())
