let count = JSON.parse(localStorage.getItem("count"));
if (!count) {
  count = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

updateScore();

function playMove(playerMove) {
  const computerMove = compMove();
  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissors") {
      result = "You Win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  }
  if (result === "Tie") {
    count.ties += 1;
    console.log(
      `Wins : ${count.wins} Losses : ${count.losses} Ties : ${count.ties}`
    );
  } else if (result === "You Win") {
    count.wins += 1;
    console.log(
      `Wins : ${count.wins} Losses : ${count.losses} Ties : ${count.ties}`
    );
  }
  if (result === "You Lose") {
    count.losses += 1;
    console.log(
      `Wins : ${count.wins} Losses : ${count.losses} Ties : ${count.ties} `
    );
  }
  updateScore();

  localStorage.setItem("count", JSON.stringify(count));

  document.querySelector(".js-res").innerHTML = `${result}`;
  document.querySelector(
    ".js-move"
  ).innerHTML = `    You : <img class= "moverock" src="images/${playerMove}-emoji.png" alt=""> - Computer : <img src="images/${computerMove}-emoji.png" class="moverock" alt="">
`;

  /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
         Wins : ${count.wins} Losses : ${count.losses} Ties : ${count.ties}
         `);*/
}
function updateScore() {
  document.querySelector(
    ".js-p"
  ).innerHTML = `Wins : ${count.wins} Losses : ${count.losses} Ties : ${count.ties}`;
}

function compMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
