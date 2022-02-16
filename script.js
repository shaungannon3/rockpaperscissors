let playerScore = 0;
let computerScore = 0;


let selections = document.querySelectorAll(".selection");

selections.forEach(selection => selection.addEventListener("click", function(e){
  playRound(e.target.name.toLowerCase());
}));

function computerPlay(){
  let numberPlay = Math.floor(Math.random() * 3);
  return (numberPlay == 0 ? "paper" : numberPlay == 1 ? "rock" : "scissors"); 
}

function playRound(playerSelection) {

  let playResult = document.querySelector(".last-play-result");
  let computerSelection = computerPlay();

  // check for same move
  if (playerSelection == computerSelection) {
    playResult.innerText = "You Tied! " + computerSelection + " ties " + playerSelection;
  }
  else {
    // switch on playerSelction
    switch (playerSelection){
    case "rock":
      switch (computerSelection){
        case "scissors": 
          playResult.innerText = "You Win! " + playerSelection + " beats " + computerSelection; 
          playerScore += 1;
          break;
        case "paper": 
          playResult.innerText = "You Lose! " + computerSelection + " beats " + playerSelection; 
          computerScore += 1;
          break;
      } break;
    case "scissors":
      switch (computerSelection){
        case "paper": 
          playResult.innerText = "You Win! " + playerSelection + " beats " + computerSelection; 
          playerScore += 1;
          break;
        case "rock": 
          playResult.innerText = "You Lose! " + computerSelection + " beats " + playerSelection; 
          computerScore += 1;
          break;
      } break;
    case "paper":
      switch (computerSelection){
        case "rock": 
          playResult.innerText = "You Win! " + playerSelection + " beats " + computerSelection;
          playerScore += 1;
          break;
        case "scissors": 
          playResult.innerText = "You Lose! " + computerSelection + " beats " + playerSelection; 
          computerScore += 1;
          break;
      } break;
    }
  }

  document.querySelector("#player-score").innerText = playerScore;
  document.querySelector("#computer-score").innerText = computerScore;

  if (playerScore == 5){
    setTimeout(function(){
      alert("Player Wins");
    },10);
    playerScore = 0;
    computerScore = 0;
  }
  if (computerScore == 5){
    setTimeout(function(){
      alert("Computer Wins");
    },10);
    playerScore = 0;
    computerScore = 0;
    
  }
}
  