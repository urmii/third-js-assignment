const NUMBER_OF_ROUNDS = 5;
const PLAYER = "PLAYER";
const COMPUTER = "COMPUTER";
const CANCEL_GAME = "CANCEL_GAME";
const gameChoices = ["rock", "paper", "scissors"];

/*********************** MAIN ******************************* */
function game() {
  const gameInfo = {
    playerScore: 0,
    computerScore: 0,
  };

  for (let i = 1; i <= NUMBER_OF_ROUNDS; i++) {
    const roundNumber = i;

    const playerSelection = userPlay();
    if (playerSelection === CANCEL_GAME) {
      alert("Sad that you are leaving, REFRESH the page to play again");
      return;
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateGameResult(result, gameInfo);
    showRoundMessage(result, playerSelection, computerSelection, roundNumber);
  }
  getGameMessage(gameInfo);
  alert("REFRESH the page to play again");
}

game();
/********************** END OF MAIN ************************************** */

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return;

  if (
    (playerSelection === gameChoices[0] &&
      computerSelection === gameChoices[2]) ||
    (playerSelection === gameChoices[1] &&
      computerSelection === gameChoices[0]) ||
    (playerSelection === gameChoices[2] && computerSelection === gameChoices[1])
  )
    return PLAYER;

  return COMPUTER;
}

function showRoundMessage(
  winner,
  playerSelection,
  computerSelection,
  roundNumber
) {
  console.log("Round: ", roundNumber);

  const player = playerSelection.toUpperCase();
  const computer = computerSelection.toUpperCase();
  if (!winner) {
    console.log(
      `Its A Tie!: Your selection is ${player} & computer selection is ${computer}`
    );
  } else if (winner === COMPUTER) {
    console.log(
      `You Lose!: computer selection is ${computer} and it BEATS your selection ${player}`
    );
  } else {
    console.log(
      `You Win!: Your selection is ${player} and it BEATS computer selection ${computer}`
    );
  }
}

function getGameMessage(game) {
  console.log("***********************************************************");
  console.log(`Computer-Player: ${game.computerScore} - ${game.playerScore}`);
  if (game.playerScore > game.computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (game.playerScore < game.computerScore) {
    console.log("Sorry, you lose the game. Better luck next time!");
  } else {
    console.log("It's a tie! The game ended in a draw.");
  }
}

function updateGameResult(winner, game) {
  if (!winner) return;

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
  } else return false;
}

function isValidChoice(playerSelection) {
  return (
    playerSelection &&
    gameChoices.includes(playerSelection.toLowerCase().trim())
  );
}
