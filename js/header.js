const hamburguerButton = document.querySelector(".header__hamburguer");
const dropdown = document.querySelector(".header__dropdown");

// Adicione um evento de clique ao botão hamburguer
hamburguerButton.addEventListener("click", function () {
  // Alternar a visibilidade da caixa com as opções do menu
  dropdown.classList.toggle("active");
});
