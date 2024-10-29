function walkdog(callback){
    setTimeout(()=>{console.log("You walk the dog.");
        callback();
    },2500);
    
}
function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("You clean the kitchen");
        callback();
    },1000);
    
}
function trashout(callback){
    setTimeout(()=>{
        console.log("you trash out the bin");
        callback();
    },2500);
    
}
walkdog(cleanKitchen(trashout()));

