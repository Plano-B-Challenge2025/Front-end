document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".botao");
    const proximos = document.getElementById("proximos-3-meses");
    const ultimos = document.getElementById("ultimos-3-meses");
    const outros = document.getElementById("outros-dias");
  
    // Filtro de datas
    const filtroOutrosDias = document.getElementById("filtro-outros-dias");
    const dataInicio = document.getElementById("data-inicio");
    const dataFim = document.getElementById("data-fim");
    const btnBuscar = document.getElementById("buscar-data");
  
    // Esconde o filtro no início
    filtroOutrosDias.style.display = "none";
  
    botoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        // Remove classe ativo de todos os botões
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");
  
        // Oculta todos os cartões
        proximos.classList.remove("ativo");
        proximos.setAttribute("hidden", "");
        ultimos.classList.remove("ativo");
        ultimos.setAttribute("hidden", "");
        outros.classList.remove("ativo");
        outros.setAttribute("hidden", "");
  
        // Esconde o filtro inicialmente
        filtroOutrosDias.style.display = "none";
  
        // Ativa o cartão correspondente
        if (botao.id === "tab-proximos") {
          proximos.classList.add("ativo");
          proximos.removeAttribute("hidden");
        } else if (botao.id === "tab-ultimos") {
          ultimos.classList.add("ativo");
          ultimos.removeAttribute("hidden");
        } else if (botao.id === "tab-outros") {
          filtroOutrosDias.style.display = "flex";
        }
      });
    });
  
    // Ação do botão buscar
    btnBuscar.addEventListener("click", () => {
      const dataInicioSelecionada = dataInicio.value;
      const dataFimSelecionada = dataFim.value;
  
      if (!dataInicioSelecionada || !dataFimSelecionada) {
        alert("Selecione as duas datas.");
        return;
      }
  
      // Usa apenas a data de início para exibir no cartão
      const dataInicioCorrigida = new Date(dataInicioSelecionada + "T00:00:00");
      const dataFormatada = dataInicioCorrigida.toLocaleDateString("pt-BR");
  
      const horaAleatoria = `${Math.floor(Math.random() * (17 - 8) + 8)
        .toString()
        .padStart(2, "0")}:00`;
  
      document.getElementById("data-felipe").textContent = dataFormatada;
      document.getElementById("hora-felipe").textContent = horaAleatoria;
  
      // Mostra o cartão de outros dias
      outros.classList.add("ativo");
      outros.removeAttribute("hidden");
  
      // Esconde os outros
      proximos.classList.remove("ativo");
      proximos.setAttribute("hidden", "");
      ultimos.classList.remove("ativo");
      ultimos.setAttribute("hidden", "");
    });
  
    // Botão voltar
    const btnVoltar = document.getElementById("btn-voltar");
    btnVoltar.addEventListener("click", () => {
      window.location.href = "./menu.html";
    });
  });