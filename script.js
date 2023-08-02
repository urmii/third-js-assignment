// Function to get a random choice from computer
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
  } else {
    return "It's a tie! You both chose " + playerSelection;
  }
}

// Function to play the game for 5 rounds
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      'Round ' +
        (i + 1) +
        '! Choose Rock, Paper, or Scissors:'
    );

    if (playerSelection === null) {
      // If the user clicks "Cancel," ask for confirmation to quit the game
      const quitConfirm = confirm(
        'Are you sure you want to quit the game? Click "OK" to quit or "Cancel" to continue.'
      );
      if (quitConfirm) {
        console.log('Game aborted by the user.');
        return;
      } else {
        // If user cancels quit, repeat the current round
        i--;
        continue;
      }
    }

    // Check for valid input (Rock, Paper, or Scissors) and repeat the round for invalid input
    if (
      playerSelection.toLowerCase() !== 'rock' &&
      playerSelection.toLowerCase() !== 'paper' &&
      playerSelection.toLowerCase() !== 'scissors'
    ) {
      console.log('Invalid input! Please choose Rock, Paper, or Scissors.');
      i--;
      continue;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    alert(result);
    console.log(result);

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('Congratulations! You win the game!');
    alert('Congratulations! You win the game!');
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lose the game. Better luck next time!');
    alert('Sorry, you lose the game. Better luck next time!');
  } else {
    console.log("It's a tie! The game ended in a draw.");
    alert("It's a tie! The game ended in a draw.");
  }
}

game();
