import { getRandomHexColor } from './helpers';

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

let colorChangerId;

function onStartClick() {
  startBtn.setAttribute('disabled', 'disabled');
  colorChangerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  clearInterval(colorChangerId);
  startBtn.removeAttribute('disabled');
}
