import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;

  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  if (amountValue < 0 || stepValue < 0 || delayValue < 0) {
    Notify.failure("Please enter number more then 0");
    return;
  }

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(res => {
        console.log(res);
        Notify.success(res);
      })
      .catch(err => {
        Notify.failure(err);
      });

    delayValue += stepValue;
  }

  formEl.reset();
}
