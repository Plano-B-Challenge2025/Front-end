document.addEventListener("DOMContentLoaded", function () {
  const btnVoltar = document.getElementById("btn-voltar");

  if (btnVoltar) {
    btnVoltar.addEventListener("click", function () {
      // Redireciona para a página principal (ajuste o caminho se necessário)
      window.location.href = "../menu.html"; 
    });
  }
});