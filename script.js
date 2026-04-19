const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");

rock.addEventListener("click",()=>{
    let humanChoice="rock";
    rock.style.backgroundImage="none";
    
    setTimeout(()=>{
        console.log("background is back to normal");
        rock.style.backgroundImage="";
    },2000)
    console.log(humanChoice);
});