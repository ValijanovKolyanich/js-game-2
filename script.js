let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector(`#dispalay`);
const button = document.querySelector(`#button`);
const counter = document.querySelector(`#counter`);

button.onclick = start;

function start() {
  const startTime = Date.now();

  button.onclick = () => counter.textContent = clicks++;

  const interval = setInterval(() => {
    const Delta = Date.now() - startTime;
    display.textContent = TIMEOUT - Delta;
  }, 100);

  const timeout = setTimeout(() => {
    button.onclick = 0;
   display.textContent = `Game over`;

    clearInterval(interval)
    clearTimeout(timeout);
  }, TIMEOUT);
}
function formatTime(ms) {
  return Number.parseFloat(ms/1000).toFixed(2);
}
