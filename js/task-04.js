
const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');


let count = 0;
console.dir(count);

const increment = () => {
  count += 1;
  counterValue.textContent = count;
};
console.dir(increment);
const decrement = () => {
  count -= 1;
  counterValue.textContent = count;
};
console.dir(decrement);

к
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
console.dir(incrementBtn)