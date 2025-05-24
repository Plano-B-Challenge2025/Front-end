const perguntas = document.querySelectorAll('.faq-item .pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', function () {
        this.parentElement.classList.toggle('ativa');
    });
});
