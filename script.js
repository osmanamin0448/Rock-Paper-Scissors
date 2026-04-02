const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const humanMark= document.querySelector("#human-score");
const computerMark= document.querySelector("#computer-score");
const finalResult = document.querySelector("#final-result");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let result = Math.floor(Math.random() * 3);

  if(result === 0){
    return "rock";
  }else if(result === 1){
    return "paper";
  }else if(result == 2){
    return "scissors";
  }
}

rock.addEventListener("click",()=>{
  playRound("rock", getComputerChoice())  
})

paper.addEventListener("click",()=>{
  playRound("paper",getComputerChoice())  
  })

scissors.addEventListener("click",()=>{
  playRound("scissors",getComputerChoice())  
})

function playRound(humanChoice, computerChoice){


  //Winning scenario for computer 
  if(humanChoice === "rock" && computerChoice === "paper" ){
    computerScore++;
    console.log("You lose Paper beats Rock");  }
  else if(humanChoice === "paper" && computerChoice === "scissors" ){
    computerScore++;
    console.log("You lose Scissors beats paper");
  }
  else if(humanChoice === "scissors" && computerChoice === "rock" ){
    computerScore++;
    console.log("You lose Rock beats Scissors");
  }

  //Winning scenario for human
  else if(humanChoice === "paper" && computerChoice === "rock" ){
    humanScore++;
    console.log("You win Paper beats Rock");
  }
  else if(humanChoice === "scissors" && computerChoice === "paper" ){
    humanScore++;
    console.log("You win Scissors beats paper");
  }
  else if(humanChoice === "rock" && computerChoice === "scissors" ){
    humanScore++;
    console.log("You win Rock beats Scissors");
  }

  //Tie scenario
  else if(humanChoice === "rock" && computerChoice === "rock" ){
    console.log("It is a tie!");
  }
  else if(humanChoice === "paper" && computerChoice === "paper" ){
    console.log("It is a tie!");
  }
  else if(humanChoice === "scissors" && computerChoice === "scissors" ){
    console.log("It is a tie!");
  }

  humanMark.textContent = "Human score: " + humanScore
  computerMark.textContent = "computer score: " + computerScore

  //Compare score and declare winner
  if (humanScore === 5) {
    finalResult.textContent = "Human Wins"
  } 
  else if (computerScore === 5) {
    finalResult.textContent = "Computer Wins";
  } 
  else if (humanScore === computerScore){
    finalResult.textContent = "It's a draw, Good Game"
  }  
}


