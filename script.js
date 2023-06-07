/* In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    * For now, remove the logic that plays exactly five rounds.

    * Create three buttons, one for each selection. 

    * Add an event listener to the buttons that call your playRound function with the correct userInput every time a button is clicked. (you can keep the console.logs for this step)

    * Add a div for displaying results and change all of your console.logs into DOM methods.

    * Display the running score, and announce a winner of the game once one player reaches 5 points.

    * You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
 */

let userInput = "";
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

rock.addEventListener("click", () => {
  userInput = "rock";
});

paper.addEventListener("click", () => {
  userInput = "paper";
});

scissor.addEventListener("click", () => {
  userInput = "scissor";
});

function getComputerChoice() {
  const randomSelection = Math.floor(Math.random() * 3) + 1;
  switch (randomSelection) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
    default:
      return "";
  }
}

const playBtn = document.getElementById("playBtn");
const userScore = document.getElementById("userScore");
const machineScore = document.getElementById("machineScore");

playBtn.addEventListener("click", () => {
  let computerSelection = getComputerChoice();

  if (userInput === "") {
    // No selection made by the user
    return;
  }

  if (
    (userInput === "rock" && computerSelection === "scissor") ||
    (userInput === "paper" && computerSelection === "rock") ||
    (userInput === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    userScore.textContent = playerScore;
    return;
  } else if (
    (userInput === "rock" && computerSelection === "paper") ||
    (userInput === "paper" && computerSelection === "scissor") ||
    (userInput === "scissor" && computerSelection === "rock")
  ) {
    computerScore++;
    machineScore.textContent = computerScore;
    return;
  } else if (userInput === computerSelection) {
    return;
  }

  if (playerScore >= 5) {
    userScore.textContent;
  }
});
