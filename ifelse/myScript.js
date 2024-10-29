let age;
document.getElementById("mybutton").onclick=function(){
age = document.getElementById("mytext").value;
age=Number(age);
let ans = document.getElementById("ans");
if(age<=0)
    ans.textContent= `you are not born so Cannot enter into this website..!`;
else if(age<=18)
    ans.textContent=`you are below 18 so you cannot enter into this website..!`;
else if(age>=100)
    ans.textContent=`you are too older so you cannot enter into this website..!`;
else
    ans.textContent=`you can enter into this website...!this website welcomes u..!!`;
}