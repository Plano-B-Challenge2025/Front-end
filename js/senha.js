//Codigo para o login.html funcionar e logar contas cadastradas
document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();

    const cpf = document.getElementById('idCpf').value.trim();
    const senha = document.getElementById('idSenha').value.trim();

    if (cpf.length !== 11) {
        alert('CPF deve conter 11 dígitos.');
        return;
    }

    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioAutenticado = usuarios.find(user => user.cpf === cpf && user.senha === senha);

    if (usuarioAutenticado) {
        alert('Bem-vindo(a), ${usuarioAutenticado.nome}!');

        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAutenticado));

        window.location.href = '../proposta/menu.html';

    } else {
        alert('CPF ou senha incorretos. Tente novamente.');
    }
});