document.addEventListener("DOMContentLoaded", function () {
  const btnVoltar = document.getElementById("btn-voltar");

  if (btnVoltar) {
    btnVoltar.addEventListener("click", function () {
      // Redireciona para a página principal (ajuste o caminho se necessário)
      window.location.href = "index.html"; 
    });
  }
});

let horarioSelecionado = null;
let medicoSelecionado = null;
let iconeSelecionado = null;

document.addEventListener("DOMContentLoaded", () => {
  const dataInput = document.getElementById("data");
  const horariosDiv = document.getElementById("cartaoHorarios");
  const marcarBtn = document.getElementById("marcarBtn");
  const confirmarBtn = document.getElementById("confirmarBtn");

  dataInput.addEventListener("change", () => {
    horariosDiv.style.display = "block";
    limparSelecao();
  });

  const horarios = document.querySelectorAll(".horario");
  horarios.forEach(horario => {
    horario.addEventListener("click", () => {
      selecionarHorario(horario);
    });
  });

  marcarBtn.addEventListener("click", confirmarExame);

  confirmarBtn.addEventListener("click", () => {
    document.getElementById("etapaFinal").style.display = "none";
    document.getElementById("telaSucesso").style.display = "flex";
  });
});

function selecionarHorario(elemento) {
  const horarios = document.querySelectorAll(".horario");
  horarios.forEach(h => h.classList.remove("selecionado"));
  elemento.classList.add("selecionado");

  horarioSelecionado = elemento.dataset.hora;
  medicoSelecionado = elemento.dataset.medico;
  iconeSelecionado = elemento.dataset.icone;

  document.getElementById("marcarBtn").disabled = false;
}

function confirmarExame() {
  const data = document.getElementById("data").value;
  if (!data || !horarioSelecionado || !medicoSelecionado) return;

  const partes = data.split("-");
  const dataFormatada = ${partes[2]}/${partes[1]}/${partes[0]};

  document.getElementById("etapaInicial").style.display = "none";
  document.getElementById("etapaFinal").style.display = "flex";

  document.getElementById("iconeFinal").src = iconeSelecionado;
  document.getElementById("medicoFinal").innerText = medicoSelecionado;
  document.getElementById("dataHoraFinal").innerText = ${dataFormatada} às ${horarioSelecionado};
}

function limparSelecao() {
  horarioSelecionado = null;
  medicoSelecionado = null;
  iconeSelecionado = null;
  document.getElementById("marcarBtn").disabled = true;

  const horarios = document.querySelectorAll(".horario");
  horarios.forEach(h => h.classList.remove("selecionado"));

  document.getElementById("etapaFinal").style.display = "none";
  document.getElementById("etapaInicial").style.display = "flex";
}