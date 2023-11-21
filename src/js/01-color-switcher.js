function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

let intervalId;

document.getElementById("data-start").addEventListener("click", function () {
  this.disabled = true;

  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

document.getElementById("stopButton").addEventListener("click", function () {
  document.getElementById("startButton").disabled = false;

  clearInterval(intervalId);
});
