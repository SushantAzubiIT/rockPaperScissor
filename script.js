const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
const box=document.getElementsByClassName("box");
const humanCount=document.getElementById("human-count");
const computerCount=document.getElementById("computer-count");
const loseWinMsg= document.getElementById("lose-win-msg");
const choices=["rock","paper","scissor"];



let computerChoice="";
let humanChoice="";
let computerScore= 0;
let humanScore=0;

function randomChoicePicker(){
    computerChoice =choices[Math.floor(Math.random()*3)];

    console.log(computerChoice);
}

function winLosLogic(){
    if(humanChoice=="rock" && computerChoice=="rock" || humanChoice=="scissor" && computerChoice=="scissor" || humanChoice=="paper" && computerChoice=="paper")
    {
        loseWinMsg.innerText=`YOO! its a tie play again you choosed ${humanChoice} and computer picked ${computerChoice} too.`;
        console.log("YOO! its a tie play again");
    }
    else if(humanChoice=="rock" && computerChoice=="paper" || humanChoice=="paper" && computerChoice=="scissor" || humanChoice=="scissor" && computerChoice=="rock")
    {
        loseWinMsg.innerText=`Sorry! you lost you choosed ${humanChoice} and computer picked ${computerChoice}.`;
        console.log("Sorry! you lost");
        computerScore+=1;
    }
    else{
        loseWinMsg.innerText=`Damn! bro, you won you choosed ${humanChoice} and computer picked ${computerChoice}.`;
        console.log("Damn! bro, you won");
        humanScore+=1;
    }

    computerCount.innerText=computerScore;
    humanCount.innerText=humanScore;

}

rock.addEventListener("click",()=>{
    humanChoice="rock";
    rock.style.backgroundImage="none";

    setTimeout(()=>{
        console.log("background is back to normal");
        rock.style.backgroundImage="";
    },2000)

    console.log(humanChoice);
    randomChoicePicker();
    winLosLogic();
    
});

paper.addEventListener("click",()=>{
    humanChoice="paper";
    paper.style.backgroundImage="none";

    setTimeout(()=>{
        console.log("background is back to normal");
        paper.style.backgroundImage="";
    },2000)
    
    console.log(humanChoice);
    randomChoicePicker();
    winLosLogic();
});

scissor.addEventListener("click",()=>{
    humanChoice="scissor";
    scissor.style.backgroundImage="none";

    setTimeout(()=>{
        console.log("background is back to normal");
        scissor.style.backgroundImage="";
    },2000)
    
    console.log(humanChoice);
    randomChoicePicker();
    winLosLogic();
});
