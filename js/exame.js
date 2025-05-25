document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os botões das abas e os cartões
    const botoes = document.querySelectorAll(".botao");
    const cartoes = document.querySelectorAll(".cartao");
  
    botoes.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        botoes.forEach(b => {
          b.classList.remove("ativo");
          b.setAttribute("aria-selected", "false");
        });
        botao.classList.add("ativo");
        botao.setAttribute("aria-selected", "true");
  
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
  
    // Exibe o primeiro cartão por padrão
    if(cartoes.length > 0){
      cartoes[0].classList.add("ativo");
      cartoes[0].removeAttribute("hidden");
    }
  
    // Navegação do botão "Voltar"
    const btnVoltar = document.getElementById("btn-voltar");
    btnVoltar.addEventListener("click", () => {
      window.location.href = "index.html";
    });
    btnVoltar.addEventListener("keypress", (event) => {
      if(event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = "index.html"; 
      }
    });
  });