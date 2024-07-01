let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const getCompChoices=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor((Math.random()*3));
    return option[randIdx];
};
const drawGame=()=>{
    console.log("MATCH IS DRAW");
    msg.innerText="GAME WAS DRAW.PLAY AGAIN";
    msg.style.backgroundColor="#1C1D21"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOOSE! ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    //Generate computer choice
    const compChoice=getCompChoices();
    console.log("comp choice: ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissor"?false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});