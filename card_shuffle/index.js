// fishers-yates algorithm :


let cards = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'];
document.getElementById("myh1").textContent=cards;

document.getElementById("mybtn").onclick = function()
{
    let arrays = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'];
    for(let i=arrays.length-1;i>0;i--)
    {
        const random = Math.floor(Math.random()*(i+1));
        [arrays[i], arrays[random]]=[arrays[random], arrays[i]];
    }
    document.getElementById("myh2").textContent=arrays;
}