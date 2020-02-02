import sth from './test';

console.log(sth);
console.log("hii");


// DATE AND TIME

setInterval(function () {

    var now, days, hours, minutes, seconds, countDownDate, distance;
    var countDownDate = new Date("Nov 7, 2020 21:00:00").getTime();
    now = new Date().getTime();
    distance = countDownDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.day').textContent = days;
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.min').textContent = minutes;
    document.querySelector('.sec').textContent = seconds;

}, 10);





