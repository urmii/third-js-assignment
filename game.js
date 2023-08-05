const NUMBER_OF_ROUNDS = 5;
const PLAYER = "PLAYER";
const COMPUTER = "COMPUTER";
const CANCEL_GAME = "CANCEL_GAME";
const gameChoices = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer)
    return `It's a tie! You both chose ${playerSelection}`;

  if (
    (player === gameChoices[0] && computer === gameChoices[2]) ||
    (player === gameChoices[1] && computer === gameChoices[0]) ||
    (player === gameChoices[2] && computer === gameChoices[1])
  )
    return `You Win! ${playerSelection} beats ${computerSelection}`;

  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function getGameMessage(game) {
  console.log("***********************************************************");
  if (game.playerScore > game.computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (game.playerScore < game.computerScore) {
    console.log("Sorry, you lose the game. Better luck next time!");
  } else {
    console.log("It's a tie! The game ended in a draw.");
  }
}

function updateGameResult(winner, game) {
  if (winner === COMPUTER) {
    game["computerScore"] = game["computerScore"] + 1;
  } else {
    game["playerScore"] = game["playerScore"] + 1;
  }
}

function userPlay() {
  let playerSelection = "";

  do {
    playerSelection = prompt("Please Choose Rock, Paper or Scissors:");
    if (isCancelGame(playerSelection)) return CANCEL_GAME;
  } while (!isValidChoice(playerSelection));

  return playerSelection;
}

function isCancelGame(playerSelection) {
  if (playerSelection !== null) return false;

  const quitConfirm = confirm(
    'Are you sure you want to quit the game? Click "OK" to quit or "Cancel" to continue.'
  );
  if (quitConfirm) {
    alert("Game aborted by the user.");
    return true;
  }

  return false;
}

function isValidChoice(playerSelection) {
  return playerSelection && gameChoices.includes(playerSelection.toLowerCase());
}
function game() {
  const gameInfo = {
    playerScore: 0,
    computerScore: 0,
  };

  for (let i = 1; i <= 5; i++) {
    const roundNumber = i;

    const playerSelection = userPlay();
    if (playerSelection === CANCEL_GAME) {
      alert("Sad that you are leaving, REFRESH the page to play again");
      return;
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log("Round: ", roundNumber);
    console.log(result);
    updateGameResult(result, gameInfo);
  }
  getGameMessage(gameInfo);
  alert("REFRESH the page to play again");
}

game();
