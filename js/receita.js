document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".botao");
    const cartoes = document.querySelectorAll(".cartao");
  
    botoes.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");
  
        cartoes.forEach((cartao, i) => {
          if(i === index) {
            cartao.classList.add("ativo");
            cartao.removeAttribute("hidden");
          } else {
            cartao.classList.remove("ativo");
            cartao.setAttribute("hidden", "");
          }
        });
      });
    });
  
    const btnVoltar = document.getElementById("btn-voltar");
    btnVoltar.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });