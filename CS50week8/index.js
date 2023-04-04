const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const scoreText = document.querySelector("#score");

 
let player;
let computer;
let result;
let score=0;


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    scoreText.textContent = `${score}`;
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
  if(player == computer){
    return "Draw!";
  }
  else if(computer == "ROCK"){
    if (player == "PAPER") {
      score++;
      return "You Won! Want To Play Again?";
    } else {
      return "You Lost! Want To Play Again?";
    }
  }
  else if(computer == "PAPER"){
    if (player == "SCISSORS") {
      score++;
      return "You Won! Want To Play Again?";
    } else {
      return "You Lost! Want To Play Again?";
    }
  }
  else if(computer == "SCISSORS"){
    if (player == "ROCK") {
      score++;
      return "You Won! Want To Play Again?";
    } else {
      return "You Lost! Want To Play Again?";
    }
  }
}
