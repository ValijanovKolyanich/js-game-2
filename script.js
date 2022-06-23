let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector(`#dispalay`);
const button = document.querySelector(`#button`);
const counter = document.querySelector(`#counter`);

button.onclick = start;

function start() {
  const startTime = Date.now();

  display.textContent = TIMEOUT;
  button.onclick = () => counter.textContent = clicks++;

  const interval = setInterval(() => {
    const delta = date.now() - startTime;
    display.textContent = TIMEOUT - delta;
  });

  const timeout = setTimeout(() => {
    button.onclick = 0;
   

    clearTimeout(timeout);
  }, TIMEOUT);
}
