const timer = document.getElementById("timer");
const cast_list = document.getElementById("cast_list");
let SS = 00;
let HH = 0;
let MM = 0;
let MS = 0;
let flag = true;
let startFlag = true;
let Timer;
function Start() {
  if (startFlag) {
    Timer = setInterval(() => {
      MS += 10;
      if (MS == 1000) {
        SS++, (MS = 0);
      }
      if (SS == 60) {
        MM++;
        SS = 0;
      }
      if (MM == 60) {
        HH++;
        MM = 0;
      }
      timer.innerText = `${HH} : ${MM} : ${SS} : ${MS}`;
      startFlag = false;
    }, 10);
  }
}
function Pause() {
  clearInterval(Timer), (startFlag = true);
}
function Reset() {
  (SS = 0), (MM = 0), (HH = 0), (MS = 0);
  timer.innerText = `00 : 00 : 00 : 00`;
  clearInterval(Timer);
}
function Cast() {
  let list = document.createElement("li");
  let li = cast_list.appendChild(list);
  let cast_Value = document.createTextNode(`${HH} : ${MM} : ${SS} : ${MS}`);
  list.appendChild(cast_Value);
}
