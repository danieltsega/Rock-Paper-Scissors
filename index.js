let user = 0;
let computer = 0;
let roundUser = 0;
let roundComp = 0;

// The function that lets the user to play one round by computing the insertion of both players
function playRound(playerSelection, computerSelection) {
  //check for the player having 'Rock'
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    //console.log("Yay! I won Rock beats Scissors");
    user += 1;
    roundUser += 1;
    return user, roundUser;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    //console.log("You Lose! Paper beats Rock");
    computer += 1;
    roundComp += 1;
    return computer, roundComp;
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    //console.log("Opps Draw!!");
    user = user;
    computer = computer;
    roundComp = 0;
    roundUser = 0;
    return user, computer, roundComp, roundUser;
  }
  //check for the player having 'Scissors'
  else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
    //console.log("Opps Draw!!");
    user = user;
    computer = computer;
    roundComp = 0;
    roundUser = 0;
    return user, computer, roundComp, roundUser;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    //console.log("Yay! I won Scissor beats Paper");
    user += 1;
    roundUser += 1;
    return user, roundUser;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    //console.log("You Lose! Rock beats Scissors");
    computer += 1;
    roundComp += 1;
    return computer, roundComp;
  }
  //check for the player having 'Paper'
  else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    //console.log("Opps Draw!!");
    user = user;
    computer = computer;
    roundComp = 0;
    roundUser = 0;
    return user, computer, roundComp, roundUser;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    //console.log("Yay! I won PAPER beats ROCK");
    user += 1;
    roundUser += 1;
    return user, roundUser;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    //console.log("! I won PAPER beats ROCK");
    computer += 1;
    roundComp += 1;
    return computer, roundComp;
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
  let userTotal = 0;

  let compTotal = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(
      `User Selected: ${playerSelection} Computer Selection: ${computerSelection}`
    );

    if (roundUser > roundComp) {
      console.log("Yay You Won By score of: ", roundUser);
      roundUser -= 1;
    } else if (roundUser < roundComp) {
      console.log("Opps Computer Won By score of: ", roundComp);
      roundComp -= 1;
    } else if (roundUser == roundComp) {
      console.log("DRAW!!");
      roundUser -= 1;
      roundComp -= 1;
    }
    userTotal += user;
    compTotal += computer;
  }
  if (userTotal > compTotal) {
    console.log("Yay! You Won By Overall Score of: ", userTotal);
  } else if (compTotal > userTotal) {
    console.log("Opps Computer Won By Overall Score of: ", compTotal);
  } else if (compTotal == userTotal) {
    console.log("DRAW!!!");
  }
}

// Declaring both the computer function and also the player selection of the game

game();
//playRound(playerSelection, computerSelection);
