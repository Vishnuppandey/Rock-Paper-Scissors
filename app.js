let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepar = document.querySelector("#user-score");
const compscorepar = document.querySelector("#comp-score");
const gencompchoice = () => {
  const options = ["rock", "scissor", "paper"];
  const rndmind = Math.floor(Math.random() * 3);
  return options[rndmind];
};
const drawgame = () => {

  msg.innerText = "Game was Draw . play again ";
  msg.style.backgroundColor = " #081b31";
};
const showvinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userScore++;
    userscorepar.innerText = userScore;
    msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compscorepar.innerText = compScore;
    msg.innerText = `You lose!  ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {

  const compchoice = gencompchoice();
 
  if (userchoice == compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice == "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice == "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showvinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
