let counterValue = 0;

const counterEl = document.querySelector("#value");
// counterEl.innerHTML = counterValue;
// console.log(counterEl.innerHTML);

const decrButton = document.querySelector('button[data-action="decrement"]');
// console.log(decrButton.dataset.action);
const incrButton = document.querySelector('button[data-action="increment"]');
// console.log(incrButton.dataset.action);

decrButton.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.innerHTML = counterValue;
});
incrButton.addEventListener("click", () => {
  counterValue += 1;
  counterEl.innerHTML = counterValue;
});
