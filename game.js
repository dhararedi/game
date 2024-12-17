const choices = ["Scissors", "Rock", "Spock", "Paper", "Lizard"];
const outcomes = {
  Scissors: { Paper: "cuts", Lizard: "decapitates" },
  Rock: { Scissors: "crushes", Lizard: "crushes" },
  Spock: { Rock: "vaporizes", Scissors: "smashes" },
  Paper: { Rock: "covers", Spock: "disproves" },
  Lizard: { Spock: "poisons", Paper: "eats" },
};

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function play(playerChoice) {
  // Play the click sound on button press
  playClickSound();

  // Prevent further moves if the game is over
  if (playerScore >= winningScore || computerScore >= winningScore) return;

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("playerChoice").innerText = getEmoji(playerChoice);
  document.getElementById("computerChoice").innerText = getEmoji(computerChoice);

  let result = "";

  if (playerChoice === computerChoice) {
    result = `It's a tie! You both chose ${playerChoice}.`;
  } else if (outcomes[playerChoice] && outcomes[playerChoice][computerChoice]) {
    result = `You win! ${playerChoice} ${outcomes[playerChoice][computerChoice]} ${computerChoice}.`;
    playerScore++;
    playWinSound(); // Play the win sound
  } else {
    result = `You lose! ${computerChoice} ${outcomes[computerChoice][playerChoice]} ${playerChoice}.`;
    computerScore++;
    playLoseSound(); // Play the lose sound
  }

  document.getElementById("result").innerText = result;
  updateScores();

  // Check for game over
  if (playerScore >= winningScore) {
    document.getElementById("result").innerText =
      "Congratulations! You win the game!";
    disableButtons();
  } else if (computerScore >= winningScore) {
    document.getElementById("result").innerText = "Game over! Computer wins!";
    disableButtons();
  }
}

function updateScores() {
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
}

function disableButtons() {
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((button) => (button.disabled = true));
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerChoice").innerText = "❔";
  document.getElementById("computerChoice").innerText = "❔";
  document.getElementById("result").innerText =
    "Choose an option to start the game!";
  updateScores();
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((button) => (button.disabled = false));
}

function getEmoji(choice) {
  switch (choice) {
    case "Scissors":
      return "✂️";
    case "Rock":
      return "✊";
    case "Spock":
      return "🖖";
    case "Paper":
      return "📰";
    case "Lizard":
      return "🦎";
    default:
      return "❔";
  }
}

// Sound functions
function playClickSound() {
  let clickAudio = document.getElementById("clickSound");
  clickAudio.currentTime = 0; // Reset to start
  clickAudio.play();
}

function playWinSound() {
  let winAudio = document.getElementById("winSound");
  winAudio.currentTime = 0; // Reset to start
  winAudio.play();
}

function playLoseSound() {
  let loseAudio = document.getElementById("loseSound");
  loseAudio.currentTime = 0; // Reset to start
  loseAudio.play();
}
