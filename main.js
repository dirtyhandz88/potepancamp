
let hr = min = sec = ms = "0" + 0,
    startTimer;

const startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click" , start);
stopBtn.addEventListener("click" , stop);
resetBtn.addEventListener("click" , reset);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");


    startTimer = setInterval(()=>{
        ms++   
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 10){
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }

        if(sec == 60){
            min++;
            sec = sec < 10 ? "0" + sec : sec;
            sec = "0" + 0;
        }

        if(min == 60){
            hr++;
            sec = sec < 10 ? "0" + sec : sec;
            min = "0" + 0;
        }

        putvalue();
    },10);
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putvalue();

}

function putvalue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}
