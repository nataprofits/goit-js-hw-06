
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = boxSize + i * 10;
    box.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
    `;
    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
