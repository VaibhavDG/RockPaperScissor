const moves = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  again();
  if (playerSelection === computerSelection) {
    tie(playerSelection);
    
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    replace();
    showIcons(playerSelection);
    showComputerLose(computerSelection);
    showResult();
    return "You win this round!";
    
  } else {
    computerScore++;
    replace2();
    showIconsAI(computerSelection);
    showPlayerLose(playerSelection);
    showResult1();
    return "Computer wins this round!";
  }
  
  
}

function updateScores() {
  const computerScoreElement = document.getElementById("num1")
  const playerScoreElement = document.getElementById("num2")
  
  computerScoreElement.textContent = computerScore;
  playerScoreElement.textContent = playerScore;
}

function game(playerSelection) {
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  updateScores();
  console.log(result);
}
function replace() {
  
  document.getElementById("playArea").style.display="none"
  document.getElementById("winScreen").style.display="block"
  
  
}

function replace2() {
  document.getElementById("playArea").style.display="none"
  document.getElementById("winScreen1").style.display="block"
  
}

function showIcons(playerSelection) {
  if(playerSelection === "rock"){
    document.getElementById("fist2").style.display = "block"
  }
  else if(playerSelection === "paper"){
    document.getElementById("hand2").style.display = "block"
  }
  else if(playerSelection === "scissors"){
    document.getElementById("v1").style.display = "block"
  }
}

function showIconsAI(computerSelection) {
  if(computerSelection === "rock"){
    document.getElementById("fist2e").style.visibility = "visible"
  }
  else if(computerSelection === "paper"){
    document.getElementById("hand2e").style.visibility = "visible"
  }
  else if(computerSelection === "scissors"){
    document.getElementById("v1e").style.visibility = "visible"
  }
}

function showComputerLose(computerSelection) {
  if(computerSelection === "rock"){
    document.getElementById("loseScreen5").style.display = "block"
  }
  else if(computerSelection === "paper"){
    document.getElementById("loseScreen3").style.display = "block"
  }
  else{
    document.getElementById("loseScreen1").style.display = "block"
  }
}

function showPlayerLose(playerSelection) {
  if(playerSelection === "rock"){
    document.getElementById("loseScreen4").style.display = "block"
  }
  else if(playerSelection === "paper"){
    document.getElementById("loseScreen2").style.display = "block"
  }
  else{
    document.getElementById("loseScreen").style.display = "block"
  }
}

function tie(playerSelection) {
  document.getElementById("playArea").style.display = "none"
  document.getElementById("tieResult").style.display = "block"
  if(playerSelection === "rock"){
    document.getElementById("loseScreen5").style.display = "block"
    document.getElementById("loseScreen4").style.display = "block"
    
  }
  else if(playerSelection === "paper"){
    document.getElementById("loseScreen3").style.display = "block"
    document.getElementById("loseScreen2").style.display = "block"
  }
  else{
    
    document.getElementById("loseScreen1").style.display = "block"
    
    document.getElementById("loseScreen").style.display = "block"
  }
}

function showResult(){
  document.getElementById("result").style.display = "block"
}
function showResult1(){
  document.getElementById("result1").style.display = "block"
}
function again() {
  document.getElementById("playBtn").style.display = "block"
}
function repeatPlay() {
  document.getElementById("container") = "none"
  document.getElementById("playArea") = "block"
}







