// Selecione o botão "Questionario!" e adicione um evento de clique
const startQuizButton = document.getElementById("start-quiz");
startQuizButton.addEventListener("click", function() {
  // Oculte a seção "sobre"
  const sobreSection = document.querySelector(".sobre");
  sobreSection.style.display = "none";

  // Mostre a primeira seção de questionário
  const firstQuestionarioSection = document.getElementById("questionario-1");
  firstQuestionarioSection.style.display = "block";
});

// Selecione os botões de resposta SIM, NÃO e TALVEZ em cada seção de questionário
const answerButtons = document.querySelectorAll(".questionario button");

// Adicione um evento de clique a cada botão de resposta
answerButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Oculte a seção de questionário atual
    const currentQuestionarioSection = button.closest(".questionario");
    currentQuestionarioSection.style.display = "none";

    // Mostre a próxima seção de questionário
    const nextQuestionarioSection = currentQuestionarioSection.nextElementSibling;
    if (nextQuestionarioSection) {
      nextQuestionarioSection.style.display = "block";
    }
  });
});

// Selecione o botão "Voltar ao início" e adicione um evento de clique
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function() {
  // Oculte a seção de questionário atual
  const currentQuestionarioSection = backButton.closest(".questionario");
  currentQuestionarioSection.style.display = "none";

  // Mostre a seção "sobre"
  const sobreSection = document.querySelector(".sobre");
  sobreSection.style.display = "block";
});