const min=1;
const max=100;
const answer = Math.floor(Math.random()*(max-min+1))+min;
let attempt=0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number between ${min} and ${max} : `);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number!");
    }
    else if(guess<min || guess>max)
    {
        window.alert("Enter a valid number!");
    }
    else{
        attempt++;
        if(guess>answer)
        {
            window.alert("It is HIGH..!");
        }
        else if(guess<answer)
        {
            window.alert("It is LOW..!");
        }
        else{
            window.alert(`CORRECT..!The nmuber is ${answer}.It took you ${attempt} attempts.`);
            running=false;
        }
    }
}