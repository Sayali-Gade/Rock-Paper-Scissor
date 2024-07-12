let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randmIdx = Math.floor(Math.random() * 3);
    return options[randmIdx];

};

const drawGame = () => {
    //console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userscore++;
        userscorePara.innerText = userscore;
       // console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
       // console.log("you lose");
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
   // console.log("user choice = ", userChoice);
    //Generate computer choice ->modular
    const compChoice = genComputerChoice();
   // console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //comp chooses scissor or paper
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showwinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});