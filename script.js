const choices=["rock","paper", "scissors"];
let gameStats = { wins: 0, losses: 0, ties: 0 };
let player={choice:  null };
let computer={choice:null};
let playerScore=0;
let computerScore=0;
 let isAlive=true;
 
 
function playGame(){
    if(isAlive){
        const displayChoiceUser=document.getElementById("displayChoiceUser");
 const displayChoiceComputer=document.getElementById("displayChoiceComputer");
        getComputerChoice();

        displayChoiceUser.textContent=player.choice;
        displayChoiceComputer.textContent=computer.choice;
        compareChoices();
    
    }
   
}
function playRock(){
player.choice="rock";
playGame();
}
function playPaper(){
player.choice="paper";
playGame();
}
function playScissors(){
player.choice="scissors";
playGame();
}
function getComputerChoice(){
    computer.choice=choices[Math.floor(Math.random() * choices.length)];
}
function compareChoices(){
    if(playerScore==3){
        isAlive=false;
        result();
        displayResult.textContent=" You are the winner";
    return;
    }
    if(computerScore==3){
        isAlive=false;
        result();
        displayResult.textContent="Computer";
        return;
    }
    if(player.choice=="rock"){
        if(computer.choice=="scissors"){
            playerScore+=1;
        }
        if(computer.choice=="paper"){
            computerScore+=1;
        }
    } else if(player.choice=="paper"){
        if(computer.choice=="scissors"){
            computerScore+=1;
        }
        if(computer.choice=="rock"){
            playerScore+=1;
        }
        else{
            if(player.choice=="scissors"){
                if(computer.choice=="paper"){
                    playerScore+=1;
                }
                if(computer.choice="rock"){
                    computerScore+=1;
                }
            }
        }
    }
}
function result(){
const displayResult=document.getElementById("displayResult");

}
function reset(){
    isAlive=true;
    player.choice=null;
    computer.choice=null;
    playerScore=0;
    computerScore=0;
    displayChoiceUser.textContent="";
    displayChoiceComputer.textContent="";
    displayResult.textContent="";
}