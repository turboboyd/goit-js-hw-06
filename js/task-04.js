const counterValue = document.querySelector("#value");
const decrementBtm = document.querySelector('button[data-action="decrement"]');
const incrementBtm = document.querySelector('button[data-action="increment"]');

decrementBtm.addEventListener("click", decrement);
incrementBtm.addEventListener("click", increment);

let value = 0;

function decrement(event) {
  value -= 1;
  counterValue.textContent = value;
}

function increment(event) {
  value += 1;
  counterValue.textContent = value;
}
