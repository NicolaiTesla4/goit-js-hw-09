import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

const datetimePicker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      notiflix.alert("Error", "Please choose a date in the future");
      document.getElementById("startButton").disabled = true;
    } else {
      document.getElementById("startButton").disabled = false;
    }
  },
});

let intervalId;

document.getElementById("startButton").addEventListener("click", function () {
  const endDate = datetimePicker.selectedDates[0].getTime();
  const currentDate = new Date().getTime();
  const timeDifference = endDate - currentDate;

  intervalId = setInterval(function () {
    const timeObj = convertMs(timeDifference);

    document.querySelector("[data-days]").textContent = addLeadingZero(
      timeObj.days
    );
    document.querySelector("[data-hours]").textContent = addLeadingZero(
      timeObj.hours
    );
    document.querySelector("[data-minutes]").textContent = addLeadingZero(
      timeObj.minutes
    );
    document.querySelector("[data-seconds]").textContent = addLeadingZero(
      timeObj.seconds
    );

    if (timeDifference <= 0) {
      clearInterval(intervalId);
      notiflix.success("Countdown completed!");
      document.getElementById("startButton").disabled = true;
    } else {
      timeDifference -= 1000;
    }
  }, 1000);
});
