document.addEventListener('DOMContentLoaded', function() {
  const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach(item => {
    const pergunta = item.querySelector('.pergunta');

    const toggleFAQ = () => {
      faqs.forEach(el => el.classList.remove('ativa')); // Fecha todos
      item.classList.toggle('ativa'); // Abre/fecha o clicado
    };

    pergunta.addEventListener('click', toggleFAQ);
    pergunta.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        toggleFAQ();
      }
    });
  });
});
