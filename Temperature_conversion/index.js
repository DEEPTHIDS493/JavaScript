const textbox=document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const myp=document.getElementById("myp");
let temp;
function convert(){
    if(toF.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        myp.textContent=temp.toFixed(1) +"°F";
    }
    else if(toC.checked){
        temp = Number(textbox.value);
        temp = (temp-32) * (5 / 9 );
        myp.textContent=temp.toFixed(1) +"°C";
    }
    else{
        myp.textContent=`Select any unit..!`
    }

}





// let fruits=['apple','mango','banana'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[1]);
// fruits.push("orange");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("grapes");
// console.log(fruits);
// fruits.shift("grapes");
// console.log(fruits);
// for(let fruit of fruits){
//     console.log(fruit);
// }
// fruits.sort().reverse();
// console.log(fruits);
// let numbers=[1,2,3,4,5];
// let max=Math.max(...numbers);
// console.log(max);
// let username='bro code';
// let letters=[...username].join("-");
// console.log(letters);

// function sum(...numbers)
// {
//     result=0;
//     for(i of numbers)
//     {
//         result+=i;
//     }
//     return result;
// }
// const total = sum(1,2,3,4,5,6);
// console.log(total);

// function cs(...string)
// {
//     return string.join(" ");
// }
// const name=cs("ms.","deeps","durai");
// console.log(name);