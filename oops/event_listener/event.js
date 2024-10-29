
// // mouse-event:

// const mybox2 = document.getElementById("mybox2");
// function changeColor(event){
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent="Ouch! 😫";
// }

// mybox.addEventListener("click", changeColor)


// const mybox2 = document.getElementById("mybox2");
// const mybtn = document.getElementById("mybtn");

// mybtn.addEventListener("click", event=>{
//     mybox.style.backgroundColor="tomato";
//     mybox.textContent="Ouch! 😫";
// })

// mybtn.addEventListener("mouseover",event=>{
//     mybox.style.backgroundColor="yellow";
//     mybox.textContent="Don't do it! 😮";  
// })

// mybtn.addEventListener("mouseout",event=>{
//     mybox.style.backgroundColor="purple";
//     mybox.textContent="Click me..😍";  
// })

// // key down and key up : key-events;

// const mybox1 = document.getElementById("mybox1");

// document.addEventListener("keydown" ,event =>{
//    mybox1.textContent="🤩";
//    mybox1.style.backgroundColor="yellow";
// })

// document.addEventListener("keyup",event=>{
//     mybox1.textContent="😍";
//     mybox1.style.backgroundColor="pink";
// })
// const mybox1 = document.getElementById("mybox1");
// const moveAmount =10;
// let y=0;
// let x=0;
// document.addEventListener("keydown",event=>{
//     if(event.key.startsWith("Arrow")){
//         event.preventDefault();
//         switch(event.key){
//             case "ArrowUp":
//                 y-=moveAmount;
//                 break;
//             case "ArrowDown":
//                 y+=moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x-=moveAmount;
//                 break;
//             case "ArrowRight":
//                 x+=moveAmount;
//                 break;
//         }
//         mybox1.style.top=`${y}px`;
//         mybox1.style.left=`${x}px`;
//     }
// })

//  show and Hide Event
const mybutton = document.getElementById("mybutton");
const myimg = document.getElementById("myimg");
mybutton.addEventListener("click",event=>{
    if(myimg.style.visibility==="hidden")
    {
        myimg.style.visibility="visible";
        mybutton.textContent="Hide!";

    }
    else
    {
        myimg.style.visibility="hidden";
        mybutton.textContent="show!";
    }
    
})