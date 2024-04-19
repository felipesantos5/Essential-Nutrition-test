const btnDarkModeToggle = document.getElementById("btn-dark-mode-toggle");
const html = document.querySelector("html");

btnDarkModeToggle.onclick = function () {
  html.classList.toggle("dark-mode");
  console.log("test");
};
