// Отримуємо посилання на елементи лічильника
const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

// Ініціалізуємо лічильник
let count = 0;
console.dir(count);
// Функції, що збільшують і зменшують лічильник та оновлюють його значення на сторінці
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

// Додаємо слухачів кліків до кнопок
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
console.dir(incrementBtn)