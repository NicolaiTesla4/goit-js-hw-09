import Notiflix from "notiflix";

/* function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
} */

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document
  .getElementById("createPromisesForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstDelay = parseInt(this.elements["delay"].value, 10);
    const delayStep = parseInt(this.elements["step"].value, 10);
    const amount = parseInt(this.elements["amount"].value, 10);

    notiflix.Notify.Init({ position: "right-bottom" });

    for (let i = 1; i <= amount; i++) {
      const currentDelay = firstDelay + (i - 1) * delayStep;
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          notiflix.Notify.Success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          notiflix.Notify.Failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  });
