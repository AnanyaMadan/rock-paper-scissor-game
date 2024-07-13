let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#my-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const draw = () => {
  msg.innerText = "It's a draw! Play again :-O";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Hurrah! You win :) Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Oops! You lost :( ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const Game = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    Game(userChoice);
  });
});
