// import {PI,circumference,area} from './math.js';
// console.log(PI);

// const circ = circumference(10);
// console.log(circ.toFixed(2));

// const a = area(10);
// console.log(a.toFixed(2));

// // asynchronous 

// function func1(callback)
// {
//     setTimeout(()=>{console.log("task1");
//                     callback()},3000);
// }

// function func2(){
//     // synchronous 
//     console.log("task2"); 
//     console.log("Task3");
//     console.log("Task4");
// }
// func1(func2);

// // error handling 

// try{
//     const dividend = Number(window.prompt(`Enter a dividend :`));
//     const divisor = Number(window.prompt(`Enter a divisor :`));
//     if(divisor==0)
//     {
//         throw new Error("divisor is not be zero so enter some other number..!");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("dividend and divisor must be a number");
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("The code is completed!");
// }
// console.log("you have reached the end of the code");




document.title="my website";
const myh1=document.getElementById("myh1");
console.log(myh1);
myh1.style.backgroundColor="yellow";
myh1.style.fontFamily="arial";

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);
for(fruit of fruits){
    fruit.style.backgroundColor="green";
}
fruits[0].style.backgroundColor="red";
fruits[2].style.backgroundColor="blue";

const tagh=document.getElementsByTagName

