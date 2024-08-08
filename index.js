let user = 0;
let computer = 0;
let roundUser = 0;
let roundComp = 0;

let round = 4;

let compScore = document.getElementById("compScore");
let userScore = document.getElementById("userScore");
compScore.textContent = "0";
currentScoreComp = 0;
userScore.textContent = "0";
currentScoreUser = 0;

let statusDiv = document.getElementById("status");

// The function that lets the user to play one round by computing the insertion of both players
function playRound(playerSelection, computerSelection) {
  //check for the player having 'Rock'
  if (playerSelection === "rock" && computerSelection === "scissor") {
    //console.log("Yay! I won Rock beats Scissors");
    statusDiv.innerHTML = "";
    user += 1;
    roundUser += 1;

    currentScoreUser += 1;
    userScore.textContent = currentScoreUser;
    statusDiv.textContent = "You Won!";
    return user, roundUser;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    //console.log("You Lose! Paper beats Rock");
    statusDiv.innerHTML = "";
    computer += 1;
    roundComp += 1;

    currentScoreComp += 1;
    compScore.textContent = currentScoreComp;
    statusDiv.textContent = "You Lost!";
    return computer, roundComp;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    //console.log("Opps Draw!!");
    statusDiv.innerHTML = "";
    user = user;
    computer = computer;
    roundComp = roundComp;
    roundUser = roundUser;

    statusDiv.textContent = "Draw!";
    return user, computer, roundComp, roundUser;
  }
  //check for the player having 'Scissors'
  else if (playerSelection === "scissor" && computerSelection === "scissor") {
    //console.log("Opps Draw!!");
    statusDiv.innerHTML = "";
    user = user;
    computer = computer;
    roundComp = roundComp;
    roundUser = roundUser;

    statusDiv.textContent = "Draw!";
    return user, computer, roundComp, roundUser;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    //console.log("Yay! I won Scissor beats Paper");
    statusDiv.innerHTML = "";
    user += 1;
    roundUser += 1;

    currentScoreUser += 1;
    userScore.textContent = currentScoreUser;
    statusDiv.textContent = "You Won!";
    return user, roundUser;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    //console.log("You Lose! Rock beats Scissors");
    statusDiv.innerHTML = "";
    computer += 1;
    roundComp += 1;

    currentScoreComp += 1;
    compScore.textContent = currentScoreComp;
    statusDiv.textContent = "You Lost!";
    return computer, roundComp;
  }
  //check for the player having 'Paper'
  else if (playerSelection === "paper" && computerSelection === "paper") {
    //console.log("Opps Draw!!");
    statusDiv.innerHTML = "";
    user = user;
    computer = computer;
    roundComp = roundComp;
    roundUser = roundUser;

    statusDiv.textContent = "Draw!";
    return user, computer, roundComp, roundUser;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    //console.log("Yay! I won PAPER beats ROCK");
    statusDiv.innerHTML = "";
    user += 1;
    roundUser += 1;

    currentScoreUser += 1;
    userScore.textContent = currentScoreUser;
    statusDiv.textContent = "You Won!";
    return user, roundUser;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    //console.log("! I won PAPER beats ROCK");
    statusDiv.innerHTML = "";
    computer += 1;
    roundComp += 1;

    currentScoreComp += 1;
    compScore.textContent = currentScoreComp;
    statusDiv.textContent = "You Lost!";
    return computer, roundComp;
  }
}

//The function that generates the computer selection
function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let rand = Math.floor(Math.random() * choices.length);

  let compDiv = document.getElementById("compDiv");
  let imageCreate = document.createElement("img");
  imageCreate.setAttribute("src", `images/${choices[rand]}.png`);
  imageCreate.setAttribute("width", 50);
  imageCreate.setAttribute("height", 50);

  compDiv.innerHTML = "";
  compDiv.append(imageCreate);
  return choices[rand];
}

function buttonClick(value) {
  let userDiv = document.getElementById("userDiv");
  let imageCreate = document.createElement("img");
  imageCreate.setAttribute("src", `images/${value}.png`);
  imageCreate.setAttribute("width", 50);
  imageCreate.setAttribute("height", 50);

  userDiv.innerHTML = "";

  userDiv.append(imageCreate);

  round -= 1;
  console.log(round);
  if (round >= 0) {
    playRound(value, getComputerChoice());
  } else {
    endGame();
  }
}

function endGame() {
  let endGameDiv = document.getElementById("endGameDiv");
  endGameDiv.classList =
    "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50";

  let totalScore = document.getElementById("totalScore");
  totalScore.textContent = currentScoreUser;

  let winStatus = document.getElementById("winStatus");
  if (currentScoreUser > currentScoreComp) {
    winStatus.textContent = "Yay! You Won!";
  } else if (currentScoreUser < currentScoreComp) {
    winStatus.textContent = "Opps! You Lost!";
  } else {
    winStatus.textContent = "Draw!!";
  }

  let resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", resetRound);
}

function resetRound() {
  // Reset scores
  currentScoreUser = 0;
  currentScoreComp = 0;
  userScore.textContent = currentScoreUser;
  compScore.textContent = currentScoreComp;

  // Reset round
  roundUser = 0;
  roundComp = 0;
  round = 4;

  console.log("Round after reset:", round);

  endGameDiv.classList =
    "absolute inset-0 hidden items-center justify-center bg-black bg-opacity-50";
}
