function selecionar(botao) {
    // Desmarca todos os botões
    const botoes = document.querySelectorAll('.botao');
    botoes.forEach(b => b.classList.remove('selecionado'));

    // Marca o botão clicado
    botao.classList.add('selecionado');
  }
