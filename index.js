// The function that lets the user to play one round by computing the insertion of both players
function playRound(playerSelection, computerSelection) {
  //check for the player having 'Rock'
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    console.log("Yay! I won Rock beats Scissors");
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    console.log("Opps Draw!!");
  }
  //check for the player having 'Scissors'
  else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    console.log("Opps Draw!!");
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    console.log("Yay! I won Scissor beats Paper");
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    console.log("You Lose! Rock beats Scissors");
  }
  //check for the player having 'Paper'
  else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    console.log("Opps Draw!!");
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    console.log("Yay! I won PAPER beats ROCK");
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    console.log("Yay! I won PAPER beats ROCK");
  }
}

//The function that generates the computer selection
function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}
// Creating a function that accepts users input
function getPlayerSelection() {
  let choice = prompt("Enter Your Choice: ");
  return choice.toUpperCase();
}
//------------------Creating a Game function that lets user to play up to 5 rounds---------------

function game() {
  for (let i = 0; i <= 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}

// Declaring both the computer function and also the player selection of the game
const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log("Computer: ", computerSelection);
console.log("You: ", playerSelection);
game();
//playRound(playerSelection, computerSelection);
