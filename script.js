let userScore = document.querySelector('.users_score');
let computerScore=document.querySelector('.computer_score');
let message = document.querySelector('#msg');
let color = document.querySelector('.choicebox');
console.dir(message);
let i = 0;
let j = 0 ;
const genComputerChoice =( () =>{
    let options = ["rock","scissor","paper"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
});


const gamePlay =( (userChoice)=>{
    var compChoice = genComputerChoice();
    console.log("User Choice =", userChoice);
    console.log("Computers Choice =", compChoice);
    if(userChoice===compChoice){
        message.innerText="Game has Drawn";
        color.style.backgroundColor="rgba(52, 152, 219, 0.9)";
    }
    else{
        let userWin = true;
        if(userChoice==="scissor"){
           userWin =(compChoice==="rock" ? false : true )
           if(userWin===true){
            message.innerText="Scissor beats Paper.You have won !";
           }
           else{
            message.innerText="Sorry Rock beats scissor.Try Again";
           }
        }
        if(userChoice==="paper"){
           userWin =(compChoice==="scissor" ? false : true )
           if(userWin===true){
            message.innerText="Paper beats Rock.You have won!";
           }
           else{
            message.innerText="Rock beats paper.Try Again";
           }
        }
        if(userChoice==="rock"){
           userWin = (compChoice==="paper" ? false : true);
           if(userWin===true){
            message.innerText="Rock beats scissor.You have won!";
           }
           else{
            message.innerText="Paper beats  Rock. Try Again"
           }
        }
        console.log(userWin);
        let compWin = false
        if(userWin===true){
                   compWin = false;
        }
        else {
            compWin == true; 
        }
        if(userWin===true){
            color.style.backgroundColor="rgba(46, 204, 113, 0.9)";
            i++;
        }
        else{
            color.style.backgroundColor="rgba(231, 76, 60, 0.9)";
            j++;
        }
     
    }
  userScore.innerText=`${i}`;
  computerScore.innerText=`${j}`;

})
const choices = document.querySelectorAll('.box');
choices.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userChoice = choices.getAttribute("id");
        gamePlay(userChoice);
    })
});