document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const numeroInput = document.getElementById('idNumero');
    const emailInput = document.getElementById('idEmail');
    const comentarioInput = document.getElementById('idComentario');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const numero = numeroInput.value.trim();
        const email = emailInput.value.trim();
        const comentario = comentarioInput.value.trim();

        if (!numero || !email || !comentario) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (comentario.length > 400) {
            alert("O comentário deve ter no máximo 400 caracteres.");
            return;
        }

        const duvida = {
            numero,
            email,
            comentario,
            data: new Date().toLocaleString("pt-BR")
        };

        let duvidas = JSON.parse(localStorage.getItem('duvidas')) || [];
        duvidas.push(duvida);
        localStorage.setItem('duvidas', JSON.stringify(duvidas));

        alert("Sua dúvida foi enviada com sucesso!");

        // Resetar o formulário
        form.reset();
    });
});