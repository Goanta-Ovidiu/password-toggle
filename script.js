let showPassword = document.querySelector("input");

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (showPassword.type === "password") {
    btn.textContent = "Hide Password";
    showPassword.type = "text";
  } else if (showPassword.type !== "password") {
    btn.textContent = "Show Password";
    showPassword.type = "password";
  }
});
