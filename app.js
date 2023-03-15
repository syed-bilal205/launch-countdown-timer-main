let daysHead = document.querySelector(".days");
let hourHead = document.querySelector(".hours");
let minuteHead = document.querySelector(".minutes");
let secondHead = document.querySelector(".seconds");
let secondCard = document.querySelector("#second");
let minuteCard = document.querySelector("#minute");
let hourCard = document.querySelector("#hour");

let days;
let hours;
let minutes;
let seconds;

let countDownDate = new Date("Mar 31, 2023 00:00:00").getTime();

let upDateCountDown = setInterval(function () {
  //get today's date and time

  let now = new Date().getTime();

  // find the distance between now and future dates

  let distance = countDownDate - now;

  // time calculations for days , hours, minutes , and seconds

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysHead.innerHTML = days;
  hourHead.innerHTML = hours;
  minuteHead.innerHTML = minutes;
  secondHead.innerHTML = seconds;

  if (distance < 0) {
    daysHead.innerText = "EX";
    hourHead.innerText = "PI";
    minuteHead.innerText = "R";
    secondHead.innerText = "ED";
  }
}, 1000);
