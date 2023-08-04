const NUMBER_OF_ROUNDS = 5; 
const PLAYER = 'PLAYER';
const COMPUTER = 'COMPUTER';
const gameChoices = ["Rock", "Paper", "Scissors"];

// Function to get a random choice from computer
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) return "It's a tie! You both chose " + playerSelection;

  if (
    (player === gameChoices[0] && computer === gameChoices[2]) ||
    (player === gameChoices[1] && computer === gameChoices[0]) ||
    (player === gameChoices[2] && computer === gameChoices[1])
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Function to play the game for 5 rounds
function game() {
  const gameInfo = {
    playerScore: 0,
    computerScore: 0,
  };

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    const roundNumber = i + 1;

    let playerSelection = prompt(
      `Round ${roundNumber}! Choose Rock, Paper, or Scissors:`
    );

    if (playerSelection === null) {
      const quitConfirm = confirm(
        'Are you sure you want to quit the game? Click "OK" to quit or "Cancel" to continue.'
      );
      if (quitConfirm) {
        console.log('Game aborted by the user.');
        return;
      } else {
        i--;
        continue;
      }
    }

    // Check for valid input (Rock, Paper, or Scissors) and repeat the round for invalid input
    if (
      playerSelection.toLowerCase() !== gameChoices[0] &&
      playerSelection.toLowerCase() !== gameChoices[1] &&
      playerSelection.toLowerCase() !== gameChoices[2]
    ) {
      console.log('Invalid input! Please choose Rock, Paper, or Scissors.');
      alert('Invalid input! Please choose Rock, Paper, or Scissors.');
      i--;
      continue;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection); 
    alert(result);
    console.log(result);
    updateGameResult(result, gameInfo);
  }
  getGameMessage(gameInfo);
}

function updateGameResult(winner,game) {
  if (winner === COMPUTER) {
    game["computerScore"] = game["computerScore"] + 1;
  } else {
    game["playerScore"] = game["playerScore"] + 1;
  }
}

function getGameMessage(game) {
  if (game.playerScore > game.computerScore) {
    console.log('Congratulations! You win the game!');
    alert('Congratulations! You win the game!');
  } else if (game.playerScore < game.computerScore) {
    console.log('Sorry, you lose the game. Better luck next time!');
    alert('Sorry, you lose the game. Better luck next time!');
  } else {
    console.log("It's a tie! The game ended in a draw.");
    alert("It's a tie! The game ended in a draw.");
  }
}

game();
