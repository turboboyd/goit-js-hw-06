function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxesContainerEl = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  let size = 30;
  const boxes = Array.from({ length: amount }).map(() => {
    const colorBox = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    size += 10; 
    boxesContainerEl.insertAdjacentHTML("beforeend", colorBox);
    return colorBox;
  });
  console.log(boxes);
}

buttonDestroy.addEventListener("click", () => {
  boxesContainerEl.innerHTML = "";
});