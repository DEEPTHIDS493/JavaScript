// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// let randomNumber1;
// let randomNumber2;
// let randomNumber3;
// let min=1;
// let max=10;
// myButton.onclick = function(){
//     randomNumber1 = Math.floor(Math.random()*max)+min;
//     randomNumber2 = Math.floor(Math.random()*max)+min;
//     randomNumber3 = Math.floor(Math.random()*max)+min;
//     myLabel1.textContent=randomNumber1;
//     myLabel2.textContent=randomNumber2;
//     myLabel3.textContent=randomNumber3;
// }
// let min=1;
// let max=10;





document.getElementById("myButton").onclick=function(){
    min=document.getElementById("min").value;
    min=Number(min);
    max=document.getElementById("max").value;
    max=Number(max);
    document.getElementById("myLabel1").textContent=Math.floor(Math.random()*max)+min;
    document.getElementById("myLabel2").textContent=Math.floor(Math.random()*max)+min;
    document.getElementById("myLabel3").textContent=Math.floor(Math.random()*max)+min;


}

// let count=0;
// document.getElementById("decbtn").onclick=function(){
//     count--;
//     document.getElementById("mylabel").textContent=count;
// }
// document.getElementById("resbtn").onclick=function(){
//     count=0;
//     document.getElementById("mylabel").textContent=count;
// }
// document.getElementById("incbtn").onclick=function(){
//     count++;
//     document.getElementById("mylabel").textContent=count;
// }


// document.getElementById("mybtn").onclick=function(){
//     if(document.getElementById("subscribe").checked)
//     {
//         document.getElementById("res").textContent= `subscribed..!`;
//     }
//     else{
//         document.getElementById("res").textContent= ` not subscribed..!`;
//     }
//     if(document.getElementById("visa").checked)
//     {
//         document.getElementById("payres").textContent=`Visa selected..!`;

//     }
//     else if(document.getElementById("mc").checked)
//         {
//             document.getElementById("payres").textContent=`mastercard selected..!`;
    
//         }
//     else if(document.getElementById("pp").checked)
//         {
//             document.getElementById("payres").textContent=`paypal selected..!`;
        
//         }
//     else{
//         document.getElementById("payres").textContent=`not selected..!`;
//     }
// }