//step 2
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
//console.log(getComputerChoice());


//step3
//Ask user for their choice
function getHumanChoice(){
  let userInput = prompt("We are playing rock paper scissors: 3,2,1 GO!!");
  return userInput;
}


//Step 6;
function playGame(){

  let humanScore = 0;
  let computerScore = 0;


  function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    //Winning scenario for computer 
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
  }

  //repeat the game for 5 times
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  //show score to user
  console.log("Human score: " + humanScore)
  console.log("Computer score: " + computerScore)

  //Compare score and declare winner
  if (humanScore > computerScore) {
    console.log("Human Wins ")
  } 
  else if (computerScore > humanScore) {
    console.log("Computer wins")
  } 
  else if (humanScore == computerScore){
    console.log("It's a draw, Good Game")
  }  
}

playGame();