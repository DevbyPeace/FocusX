/////// ELEMENTS
const body = document.body;
const darkSwitch = document.getElementById("darkmode");
const lightSwitch = document.getElementById("lightmode");
const regSwitch = document.getElementById("regmode");
const startTimer = document.getElementById("starttimer");
const logoname = document.getElementById("logocheck");
const logo = document.getElementById("logo");
const outbox = document.querySelector(".outerbox");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("secs");
const studyTag = document.querySelector(".study");
const breakTag = document.querySelector(".break");
const alarm = new Audio("audio.mp3");

//////// FUNCTIONS

//  Toggle modes
const switchToDark = function () {
  body.style.backgroundColor = "black";
  logoname.style.color = "white";
  logo.style.color = "white";
};
const switchToLight = function () {
  body.style.backgroundColor = "white";
  logoname.style.color = "rgb(197, 34, 34)";
  logo.style.color = "rgb(197, 34, 34)";
};
const SwitchToReg = function () {
  body.style.backgroundColor = " rgb(197, 34, 34)";
  logoname.style.color = "white";
  logo.style.color = "white";
};

//  Study timer
const stopwatch = function () {
  let startingTime = Number(
    prompt("How many minutes would you like to study for?") * 60
  );
  startTimer.classList.add("hidden");
  const time = setInterval(function () {
    minutes.textContent = String(Math.trunc(startingTime / 60)).padStart(2, 0);
    seconds.textContent = String(startingTime % 60).padStart(2, 0);
    breakTag.classList.add("hidden");
    if (startingTime === 0) {
      alarm.play();
      minutes.textContent = "00";
      seconds.textContent = "00";
      startTimer.classList.remove("hidden");
      clearInterval(time);
      stopwatch2();
      breakTag.classList.remove("hidden");
      studyTag.classList.add("hidden");
    }
    // console.log(startingTime);
    startingTime--;
  }, 1000);
};

//  break timer
const stopwatch2 = function () {
  let startingTime = 300;
  startTimer.classList.add("hidden");
  const time = setInterval(function () {
    minutes.textContent = String(Math.trunc(startingTime / 60)).padStart(2, 0);
    seconds.textContent = String(startingTime % 60).padStart(2, 0);
    if (startingTime === 0) {
      minutes.textContent = "00";
      seconds.textContent = "00";
      startTimer.classList.remove("hidden");
      clearInterval(time);
      studyTag.classList.remove("hidden");
    }
    // console.log(startingTime);
    startingTime--;
  }, 1000);
};

//////////  EVENT LISTENERS
darkSwitch.addEventListener("click", switchToDark);
lightSwitch.addEventListener("click", switchToLight);
regSwitch.addEventListener("click", SwitchToReg);
startTimer.addEventListener("click", stopwatch);
