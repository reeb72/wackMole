let timeSecond = 00;
const timeH = document.querySelector("h2");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond++;
  displayTime(timeSecond);
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}