const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let timerInterval = null;

  return (seconds) => {
    let remainingSeconds = seconds;
    clearInterval(timerInterval);

    const updateTime = () => {
      remainingSeconds--;
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      timerEl.textContent = formattedTime;
      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
      }
    };

    updateTime();
    timerInterval = setInterval(updateTime, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  if (seconds) {
    animateTimer(seconds);
    inputEl.value = "";
  }
});
