let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");

  return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").innerHTML = timeToString(elapsedTime);
  }, 1000);
  document.getElementById("startBtn").disabled = true;
}

function stop() {
  clearInterval(timerInterval);
  document.getElementById("startBtn").disabled = false;
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById("display").innerHTML = "00:00:00";
  elapsedTime = 0;
  document.getElementById("startBtn").disabled = false;
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
document.getElementById("resetBtn").addEventListener("click", reset);
