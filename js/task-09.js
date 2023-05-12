function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

console.log(bodyEl.style.background);
button.addEventListener("click", () => {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
});

