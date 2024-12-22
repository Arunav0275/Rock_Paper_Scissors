let userScore=0;
let compScore=0;


let choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    let id=Math.floor(Math.random()*3);
    return choices[id].getAttribute("id");
};

const drawGame = ()=>{
    msg.innerText="It was a DRAW!!, PLAY AGAIN";
    msg.style.backgroundColor="#081b31";
}

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText=`You WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        document.querySelector("#user-score").innerText=userScore;
    }else{
        compScore++;
        document.querySelector("#comp-score").innerText=compScore;
        msg.innerText=`You LOSE:(, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin= compChoice==="paper"? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin= compChoice==="scissors"?false : true;
        }else{
            //rock,paper
            userWin= compChoice==="rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    }); 
});
 