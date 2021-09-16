const startBtn = document.querySelector('.btn-start')
const stopBtn = document.querySelector('.btn-stop')
const pauseBtn = document.querySelector('.btn-pause')
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minute')
const hours = document.getElementById('hour')

let counter = 0;
let minute = 0;
let hour = 0;
let interval;
startBtn.addEventListener('click', () => {
    stopBtn.disabled = false;
    pauseBtn.disabled = false;
    startBtn.disabled = true;
    interval = setInterval(timer, 1000);
});

pauseBtn.addEventListener('click', () => {
    if (pauseBtn.innerText === "CONTINUE") {
        stopBtn.disabled = false;
        pauseBtn.disabled = false;
        startBtn.disabled = true;
        pauseBtn.innerText = "pause";
        interval = setInterval(timer, 1000);
    } else {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        clearInterval(interval);
        pauseBtn.innerText = "Continue";
    }

})

stopBtn.addEventListener('click', () => {
    pauseBtn.disabled = true;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(interval);
    counter = 0;
    minute = 0;
    hour = 0;
    pauseBtn.innerText = "Pause";
    hours.innerHTML = '00';
    seconds.innerText = '00';
    minutes.innerText = '00';
})

// setInterval(timer, 1000)


function timer() {
    counter++;
    if (counter == 60) {
        counter = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    counter < 10 ? seconds.innerText = `0${counter}` :
        seconds.innerText = counter;

    minute < 10 ? minutes.innerText = `0${minute}` :
        minutes.innerText = minute;

    hour < 10 ? hours.innerText = `0${hour}` :
        hours.innerHTML = hour;
}