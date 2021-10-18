import CountDown  from "./countdown.js";

const actualDate = new Date();
const tempoParaONatal = new CountDown(`24 December ${actualDate.getFullYear()} 23:59:59 GMT -0300`);

const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');

setInterval(() => {
  day.innerText = tempoParaONatal.total.days
  hour.innerText = tempoParaONatal.total.hours
  minute.innerText = tempoParaONatal.total.minutes
  second.innerText = tempoParaONatal.total.seconds
}, 1000)

