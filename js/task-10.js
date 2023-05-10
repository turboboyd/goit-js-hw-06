function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input');
const buttonCreate = document.querySelector("[data-create]");
const boxesEl = document.querySelector("#boxes");

console.log(boxesEl);
buttonCreate.addEventListener("click", () => {
  const red = boxesEl.innerHTML = `<div width="30" heigh="30"></div>`; 
  red * 2;  
  createBoxes(input.value); 
});



function createBoxes(amount) {
  console.log(amount);
  boxesEl.innerHTML = 2 * `<div width="30" heigh="30"></div>`; 
}

// function destroyBoxes(

// )