var noon = 12;

let displayCurrentTime = function(){

    
    let liveTime = document.getElementById('liveTime');

    
    let currentTime = new Date();

    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";


    if (hours >= noon) {
        meridian = "PM";       
    }
    if (hours > noon) {
        hours = hours - 12;
    }


    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }


    let whatTimeIsIt = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    liveTime.innerText = whatTimeIsIt;

};

let updateClock = function() {
    var time = new Date().getHours();
    displayCurrentTime();
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);