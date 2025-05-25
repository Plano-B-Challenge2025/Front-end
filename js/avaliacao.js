document.addEventListener("DOMContentLoaded", () => {
    const emotions = document.querySelectorAll('.emotion');
    const comentarioInput = document.querySelector('.opiniao textarea');
    const enviarBtn = document.querySelector('.opiniao button');

    let avaliacaoSelecionada = "";

    
    const avaliacaoMap = {
        "vermelho": "Muito Ruim",
        "laranja": "Ruim",
        "amarelo": "Neutro",
        "verde-claro": "Bom",
        "verde": "Muito Bom"
    };

    
    emotions.forEach(emotion => {
        emotion.addEventListener('click', () => {
            emotions.forEach(e => e.classList.remove('selecionado'));
            emotion.classList.add('selecionado');

            
            for (const cor in avaliacaoMap) {
                if (emotion.classList.contains(cor)) {
                    avaliacaoSelecionada = avaliacaoMap[cor];
                    break;
                }
            }
        });
    });

    
    enviarBtn.addEventListener('click', () => {
        const comentario = comentarioInput.value.trim();

        if (!avaliacaoSelecionada) {
            alert("Por favor, selecione uma avaliação.");
            return;
        }

        if (comentario.length > 400) {
            alert("O comentário deve ter no máximo 400 caracteres.");
            return;
        }

        const feedback = {
            avaliacao: avaliacaoSelecionada,
            comentario,
            data: new Date().toLocaleString("pt-BR")
        };

        let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        feedbacks.push(feedback);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

        alert("Avaliação enviada com sucesso :D");

        
        emotions.forEach(e => e.classList.remove('selecionado'));
        avaliacaoSelecionada = "";
        comentarioInput.value = "";
    });
});