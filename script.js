function pSelection() {
  let userInput = prompt("Enter a selection (rock, paper, scissor)");

  userInput = userInput.toLowerCase();
  console.log(userInput);

  if (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissor"
  ) {
    console.log("Enter a valid selection");
    pSelection();
  } else {
    return userInput;
  }
}

function cSelection() {
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

pSelection();
