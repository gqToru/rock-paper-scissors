/* In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    * For now, remove the logic that plays exactly five rounds.

    * Create three buttons, one for each selection. 

    * Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

    * Add a div for displaying results and change all of your console.logs into DOM methods.

    * Display the running score, and announce a winner of the game once one player reaches 5 points.

    * You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
 */

function pSelection() {
  let userInput = prompt("Enter a selection (rock, paper, scissor)");

  userInput = userInput.toLowerCase();

  if (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissor"
  ) {
    pSelection();
  } else {
    return userInput;
  }
}

function getComputerChoice() {
  const randomSelection = Math.floor(Math.random() * 3) + 1;
  switch (randomSelection) {
    case 1:
      return "rock ";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
    default:
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return 1;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    return 2;
  } else if (playerSelection === computerSelection) {
    return 3;
  }
}

function game() {
  const playerSelection = pSelection();
  const computerSelection = getComputerChoice();

  return playRound(playerSelection, computerSelection);
}

let playerScore = 0;
let computerScore = 0;

// for (let i = 0; i < 5; i++) {
//   let gameScore = game();

//   if (gameScore === 1) {
//     playerScore++;
//   } else if (gameScore === 2) {
//     computerScore++;
//   }

//   console.log("player score: ", playerScore);
//   console.log("computer score: ", computerScore);
// }

if (playerScore > computerScore) {
  console.log("Player Wins!");
} else if (playerScore === computerScore) {
  console.log("It's a draw!");
} else {
  console.log("Computer Wins");
}
