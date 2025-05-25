// Captura os dados do formulário e salva no localStorage
document.querySelectorAll(".formulario-do-paciente").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const dados = {
        nome: document.getElementById("nome")?.value || "",
        cpf: document.getElementById("cpf")?.value || "",
        ano: document.getElementById("ano")?.value || "",
        email: document.getElementById("email")?.value || "",
        confirmarEmail: document.getElementById("confirmar-email")?.value || "",
        telefone: document.getElementById("telefone")?.value || "",
        confirmarTelefone: document.getElementById("confirmar-telefone")?.value || "",
        endereco: document.getElementById("endereco")?.value || "",
        nomeMae: document.getElementById("nome-mae")?.value || "",
        senha: document.getElementById("senha")?.value || "",
        confirmarSenha: document.getElementById("confirmar-senha")?.value || ""
      };
  
      // Salva como JSON no localStorage
      localStorage.setItem("cadastroPaciente", JSON.stringify(dados));
      
      alert("Cadastro salvo temporariamente com sucesso!");
    });
  });
  
  // Exibe o nome na página inicial (se tiver salvo)
  window.addEventListener("DOMContentLoaded", () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("cadastroPaciente"));
    if (dadosSalvos && dadosSalvos.nome) {
      const header = document.querySelector(".titulo");
      const saudacao = document.createElement("p");
      saudacao.textContent = `Olá, ${dadosSalvos.nome}`;
      saudacao.style.marginTop = "10px";
      saudacao.style.fontSize = "18px";
      header.appendChild(saudacao);
    }
  });