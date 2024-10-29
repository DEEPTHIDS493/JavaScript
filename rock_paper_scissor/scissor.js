const elements=["rock","paper","scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
let PlayerScoreValue=0;
let ComputerScoreValue=0;


function playGame(playerchoice){
    const computerchoice = elements[Math.floor(Math.random()*3)];
    let result="";

    if(playerchoice===computerchoice){
        result = "It's aTie!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice==="scissor")?"You Win!":"You Lose!";
                break;
            case "paper":
                result = (computerchoice==="rock")?"You Win!":"You Lose!";
                break;
            case "scissor":
                result = (computerchoice==="paper")?"You Win!":"You Lose!";
                break;
            }
    }
    playerdisplay.textContent=`Player : ${playerchoice}`;
    computerdisplay.textContent=`Computer : ${computerchoice}`;
    resultdisplay.textContent=result;   
    resultdisplay.classList.remove("greentext","redtext");
    switch(result)
    {
        case "You Win!" :
            resultdisplay.classList.add("greentext");
            PlayerScoreValue++;
            playerscore.textContent=PlayerScoreValue;
            break;
        case "You Lose!" :
            resultdisplay.classList.add("redtext");
            ComputerScoreValue++;
            computerscore.textContent=ComputerScoreValue;
            break;
        
    }

}