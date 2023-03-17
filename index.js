// The function that lets the user to play one round by computing the insertion of both players
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("Yay! I won Rock beats Scissors");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    console.log("Opps Draw!!");
  }
}

//The function that generates the computer selection
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}
// Declaring both the computer function and also the player selection of the game
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log("Computer: ", computerSelection);
console.log("You: ", playerSelection);
playRound(playerSelection, computerSelection);
