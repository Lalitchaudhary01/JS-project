const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date(); 
    setTimeout(updateClock, 1000);
    const getHour = currentDate.getHours();
    const getMinute = currentDate.getMinutes();
    const getSecond = currentDate.getSeconds();
    
   

   
    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (getHour / 12) * 360;

    secondE1.style.transform = `rotate(${secondDegree}deg)`;
    minuteE1.style.transform = `rotate(${minuteDegree}deg)`;
    hourE1.style.transform = `rotate(${hourDegree}deg)`;
}

updateClock();