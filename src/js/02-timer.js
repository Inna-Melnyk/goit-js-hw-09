import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { convertMs } from './helpers';
import { addLeadingZero } from './helpers';

const pickTimeEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    startBtn.removeAttribute('disabled');
    startBtn.addEventListener('click', onClick);

    function onClick() {
      startBtn.setAttribute('disabled', 'disabled');
      setInterval(() => {
        const timeLeft = convertMs(selectedDates[0] - Date.now());
        console.log(timeLeft);

        daysEl.textContent = addLeadingZero(timeLeft.days);
        hoursEl.textContent = addLeadingZero(timeLeft.hours);
        minutesEl.textContent = addLeadingZero(timeLeft.minutes);
        secondsEl.textContent = addLeadingZero(timeLeft.seconds);
      }, 1000);
    }
  },
};

const flatPickerTime = flatpickr(pickTimeEl, options);
