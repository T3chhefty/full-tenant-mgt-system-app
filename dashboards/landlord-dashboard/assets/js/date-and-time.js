const time = document.querySelector("#time")
const date = document.querySelector("#date")
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


setInterval(myTimer, 1000)

function myTimer() {
    const currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    time.innerHTML = currentTime.toLocaleTimeString();
    date.innerHTML = day  + " " +  currentTime.toLocaleDateString();
 }