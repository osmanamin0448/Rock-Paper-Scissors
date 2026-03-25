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

console.log(getComputerChoice());


//step3
function getHumanChoice(){
  let userInput = prompt("Enter your choice");
  return userInput;
}

console.log(getHumanChoice());

//step 4
let humanScore = 0;
let computerScore = 0;


