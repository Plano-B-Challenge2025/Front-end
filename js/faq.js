const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(item => {
    item.querySelector('.pergunta').addEventListener('click', function() {
        faqs.forEach(el => el.classList.remove('ativa')); // Fecha todas
        item.classList.toggle('ativa'); // Abre só a clicada
    });
});