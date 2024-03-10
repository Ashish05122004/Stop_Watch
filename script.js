let displayTime = document.querySelector(".displayTime");
let start = document.querySelector(".startBtn");
let stop = document.querySelector(".stopBtn");
let reset = document.querySelector(".resetBtn");

let min = 0;
let sec = 0;
let msec = 0;
let timerId = null;
start.addEventListener("click", () => {
    if (timerId != null) {
        clearInterval(timerId)
    }
    timerId = setInterval(timer, 10);
})
stop.addEventListener("click", () => {
    clearInterval(timerId)
})
reset.addEventListener("click", () => {
    clearInterval(timerId);
    displayTime.textContent = `00 : 00 : 00`;
})

function timer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    displayTime.textContent = `${minString} : ${secString} : ${msecString}`;
}