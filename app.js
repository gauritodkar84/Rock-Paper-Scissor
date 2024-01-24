let user_score = 0;
let comp_score = 0;


const msg = document.querySelector("#msg");
let display_msg = document.querySelector(".msgcontainer");

const choices = document.querySelectorAll(".choice");

let user_score_para = document.querySelector("#you_score");
let comp_score_para = document.querySelector("#comp_score");

let restartbtn = document.querySelector("#rebtn");
/*------------------------------------------------------------*/

const getcompChoice = () => {
    const options = ["rock","paper","scissors"];
    let generated_no = Math.floor(Math.random() * 3);
    return options[generated_no];
}

const drawgame =() =>{
    msg.innerText = "Its a Draw. Play Again" ;
    msg.style.backgroundColor = "#081b31";
}

const shoWinner = (userWin,user_choice,comp_choice) =>{
    if(userWin){
        user_score++;
        msg.innerText = `You win! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
        user_score_para.innerText = user_score;

    }
    else{
        comp_score++;
        msg.innerText = `You Lose. ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor = "red";
        comp_score_para.innerText = comp_score;
    }
}


const playgame = (user_choice) =>{
    console.log("user choice = ",user_choice);
    const comp_choice = getcompChoice();
    console.log("computer choice = ", comp_choice)

    if(user_choice === comp_choice)
    {
        drawgame();
    }
    else
    {
        let userWin = true;
        if(user_choice === "rock"){
            //scissors, paper
            userWin = comp_choice === "scissors" ? true : false;
        }
        else if (user_choice === "paper"){
            //scissors, rock
            userWin = comp_choice === "scissors" ? false : true;
        }
        else{
            userWin = comp_choice === "paper" ? true : false;
        }
        shoWinner(userWin,user_choice,comp_choice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const user_choice = choice.getAttribute("id");
        playgame(user_choice);
    } );
}
);

let restart = () =>{
    user_score = 0;
    comp_score=0;
    user_score_para.innerText = 0;
    comp_score_para.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
}

restartbtn.addEventListener("click",restart);

