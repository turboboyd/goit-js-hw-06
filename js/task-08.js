const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailValueEl = event.currentTarget.elements.email.value;
  const passwordValueEl = event.currentTarget.elements.password.value;
  if (emailValueEl === "" || passwordValueEl === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const user = {
      email: emailValueEl,
      password: passwordValueEl,
    };
    console.log(user);
    event.currentTarget.reset();
  }
}
