document.addEventListener('DOMContentLoaded', () => {
  const btnVoltar = document.getElementById('btn-voltar');
  const form = document.getElementById('form-marcar-exame');
  const inputTipoExame = document.getElementById('tipo-exame');
  const cartoesContainer = document.getElementById('cartoes-container');

  btnVoltar.addEventListener('click', () => {
    // Voltar para a página anterior ou tela principal
    window.history.back();
  });

  btnVoltar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btnVoltar.click();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tipoExame = inputTipoExame.value.trim();
    if (tipoExame === '') return;

    // Criar o cartão do exame
    const cartao = document.createElement('div');
    cartao.classList.add('cartao-exame');

    // Nome do exame
    const nomeExame = document.createElement('div');
    nomeExame.textContent = tipoExame;
    cartao.appendChild(nomeExame);

    // Botão "Ver vagas disponíveis"
    const btnVagas = document.createElement('button');
    btnVagas.classList.add('btn-vagas');
    btnVagas.textContent = 'Ver vagas disponíveis';
    btnVagas.addEventListener('click', () => {
      // Redireciona para página de vagas - ajuste a URL conforme necessário
      window.location.href = './vagas.html';
    });

    cartao.appendChild(btnVagas);
    cartoesContainer.appendChild(cartao);

    // Limpar o campo para novo exame
    inputTipoExame.value = '';
  });
});