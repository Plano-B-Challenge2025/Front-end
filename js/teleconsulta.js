document.addEventListener("DOMContentLoaded", () => {
  const btnVoltar = document.getElementById("btn-voltar");

  btnVoltar.addEventListener("click", () => {
    window.location.href = "./menu.html";
  });

  btnVoltar.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = "index.html";
    }
  });
});