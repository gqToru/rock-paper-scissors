function playerSelection() {
  let userInput = prompt("Make your selection (Rock, paper, scissor)");
  if (typeof userInput !== "string") {
    alert("Please enter a valid choice!");
    playerSelection();
  } else {
    return userInput;
  }
}

function computerSelection() {
  function getRandomNumber(min, max) {
    // Generate a random number between 0 and 1
    var random = Math.random();

    // Scale the random number to fit within the desired range
    var scaled = random * (max - min + 1);

    // Shift the range to start from the minimum value
    var result = Math.floor(scaled) + min;

    return result;
  }

  // Example usage
  var randomNumber = getRandomNumber(1, 3);

  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
      break;
  }
}

function game(computerSelection, playerSelection) {
  let player = playerSelection().toLowerCase();
  let computer = computerSelection();

  if (player === "rock" && computer === "scissor") {
    return console.log("Player wins");
  } else if (player === "rock" && computer === "paper") {
    console.log("Computer wins!");
  } else {
    console.log("It's a draw");
  }
}
