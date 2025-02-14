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
const pauseTimer = document.getElementById("pausetimer");
const resumeTimer = document.getElementById("resumetimer");

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

// Hidden buttons
pauseTimer.classList.add("hidden");
resumeTimer.classList.add("hidden");

//  Study timer
// const stopwatch = function () {
//   let startingTime = Number(
//     prompt("How many minutes would you like to study for?") * 60
//   );
//   startTimer.classList.add("hidden");
//   const time = setInterval(function () {
//     minutes.textContent = String(Math.trunc(startingTime / 60)).padStart(2, 0);
//     seconds.textContent = String(startingTime % 60).padStart(2, 0);
//     breakTag.classList.add("hidden");
//     pauseTimer.classList.remove("hidden");

//     if (startingTime === 0) {
//       alarm.play();
//       minutes.textContent = "00";
//       seconds.textContent = "00";
//       startTimer.classList.remove("hidden");
//       clearInterval(time);
//       stopwatch2();
//       breakTag.classList.remove("hidden");
//       studyTag.classList.add("hidden");
//       pauseTimer.classList.add("hidden");
//       resumeTimer.classList.add("hidden");
//     }
//     // console.log(startingTime);
//     startingTime--;

//     pauseTimer.addEventListener("click", function () {
//       clearInterval(time);
//       console.log("paused");
//       pauseTimer.classList.add("hidden");
//       resumeTimer.classList.remove("hidden");
//     });
//   }, 1000);

//   //  break timer
//   const stopwatch2 = function () {
//     let startingTime = 300;
//     startTimer.classList.add("hidden");
//     const time = setInterval(function () {
//       minutes.textContent = String(Math.trunc(startingTime / 60)).padStart(
//         2,
//         0
//       );
//       seconds.textContent = String(startingTime % 60).padStart(2, 0);
//       if (startingTime === 0) {
//         minutes.textContent = "00";
//         seconds.textContent = "00";
//         startTimer.classList.remove("hidden");
//         clearInterval(time);
//         studyTag.classList.remove("hidden");
//       }
//       // console.log(startingTime);
//       startingTime--;
//     }, 1000);
//   };

//   resumeTimer.addEventListener("click", function () {
//     resumeTimer.classList.add("hidden");
//     pauseTimer.classList.remove("hidden");
//     const time2 = setInterval(() => {
//       console.log("resumed");
//       // console.log(startingTime)
//       startingTime--;
//       minutes.textContent = String(Math.trunc(startingTime / 60)).padStart(
//         2,
//         0
//       );
//       seconds.textContent = String(startingTime % 60).padStart(2, 0);
//       if (startingTime < 1) {
//         alarm.play();
//         minutes.textContent = "00";
//         seconds.textContent = "00";
//         startTimer.classList.remove("hidden");
//         clearInterval(time2);
//         stopwatch2();
//         breakTag.classList.remove("hidden");
//         studyTag.classList.add("hidden");
//         pauseTimer.classList.add("hidden");
//         resumeTimer.classList.add("hidden");
//       }
//     }, 1000);
//   });
// };

//  break timer
const stopwatch2 = function () {
  let startingTime = 300;
  studyTag.classList.add("hidden");
  breakTag.classList.remove("hidden");

  startTimer.classList.add("hidden");
  const time = setInterval(function () {
    minutes.textContent = String(Math.trunc(startingTime / 60)).padStart(2, 0);
    seconds.textContent = String(Math.trunc(startingTime % 60)).padStart(2, 0);
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

// const pauseStopwatch = function () {
//   clearInterval(timer);
// };

//////////  EVENT LISTENERS
darkSwitch.addEventListener("click", switchToDark);
lightSwitch.addEventListener("click", switchToLight);
regSwitch.addEventListener("click", SwitchToReg);

let interval;
let startingTime = 0;
let isPaused = false;

const stopwatch = function () {
  startingTime =
    Number(prompt("How many minutes would you like to study for?")) * 60;
  startTimer.classList.add("hidden");
  pauseTimer.classList.remove("hidden");
  breakTag.classList.add("hidden");
  interval = setInterval(updateTimer, 1000);
};

const updateTimer = function () {
  if (startingTime <= 0) {
    clearInterval(interval);
    alarm.play();
    minutes.textContent = "00";
    seconds.textContent = "00";
    startTimer.classList.remove("hidden");
    pauseTimer.classList.add("hidden");
    resumeTimer.classList.add("hidden");
    stopwatch2();
    return;
  }

  minutes.textContent = String(Math.trunc(startingTime / 60)).padStart(2, "0");
  seconds.textContent = String(Math.trunc(startingTime % 60)).padStart(2, "0");

  startingTime--;
};

// Pause timer
pauseTimer.addEventListener("click", function () {
  clearInterval(interval);
  isPaused = true;
  pauseTimer.classList.add("hidden");
  resumeTimer.classList.remove("hidden");
});

// Resume timer
resumeTimer.addEventListener("click", function () {
  if (isPaused) {
    interval = setInterval(updateTimer, 1000);
    isPaused = false;
    resumeTimer.classList.add("hidden");
    pauseTimer.classList.remove("hidden");
  }
});

// Start Study Timer
startTimer.addEventListener("click", stopwatch);
