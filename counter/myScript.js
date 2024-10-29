
let count=0;
document.getElementById("dbtn").onclick=function(){
    count--;
    document.getElementById("cnt").textContent=count;
}
document.getElementById("rbtn").onclick=function(){
    count=0;
    document.getElementById("cnt").textContent=count;
}
document.getElementById("ibtn").onclick=function(){
    count++;
    document.getElementById("cnt").textContent=count;
}