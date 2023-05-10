const inputEl = document.querySelector("#validation-input");

console.log(inputEl.dataset.length);
console.log(inputEl.value.length);

function validationInput() {
  inputEl.value.length === Number(inputEl.dataset.length)
    ? (inputEl.classList = "valid")
    : (inputEl.classList = "invalid");
}

inputEl.addEventListener("blur", validationInput);
