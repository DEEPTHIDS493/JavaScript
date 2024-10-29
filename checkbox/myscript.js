// .checked
result=document.getElementById("demo");
results =document.getElementById("demos");
document.getElementById("mybutton").onclick=function(){
    if(one.checked)
        result.textContent=`you areSubscribed..!`;
    else
        result.textContent=`you are still not Subscribed..!`;
    if(two.checked)
        results.textContent=`You are paying for Visa..!`;
    else if(three.checked)
        results.textContent=`You are paying for MasterCard..!`;
    else if(four.checked)
        results.textContent=`You are paying for PayPal..!`;
    else
        results.textContent=`You are still did not select any option..So please Choose any one of them..!`;


}