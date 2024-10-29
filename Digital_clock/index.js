function DigitalClock(){
    const date=new Date();
    let hour=date.getHours();
    let meridian = hour>=12 ? 'PM' : 'AM';
    hours = hour%12 || 12;
    hours=hours.toString().padStart(2,0);
    const min = date.getMinutes().toString().padStart(2,0);
    const sec = date.getSeconds().toString().padStart(2, 0);
    const time =`${hours}:${min}:${sec} ${meridian}`;
    document.getElementById("clock").textContent=time;
} 
DigitalClock();
setInterval(DigitalClock,1000);