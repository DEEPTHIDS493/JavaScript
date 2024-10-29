

let display=document.getElementById("display");
let timer=null;
let StartTime =0;
let ElapsedTime =0;
let isRunning = false;

function Start(){
    StartTime = Date.now()-ElapsedTime;
    timer = setInterval(Update, 10);
    isRunning=true;
}
function Stop(){
    if(isRunning){
        clearInterval(timer);
        ElapsedTime=Date.now()-StartTime;
        isRunning = false;
    }

}
function Reset(){
    clearInterval(timer);
    StartTime =0;
    ElapsedTime =0;
    isRunning = false;
    display.textContent=`00:00:00:00`;

}
function Update(){

    const CurrentTime=Date.now();
    ElapsedTime = CurrentTime-StartTime;
    let hours = Math.floor(ElapsedTime / (1000 * 60 * 60));
    let mins = Math.floor(ElapsedTime / (1000 * 60 ) % 60);
    let secs = Math.floor(ElapsedTime / 1000 % 60 );
    let msecs = Math.floor(ElapsedTime % 1000 /10);

    hours = String(hours).padStart(2,"0");
    mins = String(mins).padStart(2,"0");
    secs = String(secs).padStart(2,"0");
    msecs = String(msecs).padStart(2,"0");

    display.textContent=`${hours}:${mins}:${secs}:${msecs}`;
}