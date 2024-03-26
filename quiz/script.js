const quizData = [
  {
    question: "Qual é o principal órgão do sistema circulatório?",
    options: ["Coração", "Pulmões", "Fígado", "Cérebro"],
    correctAnswer: "Coração",
    explanation:
      "O coração é o principal órgão do sistema circulatório, responsável por bombear o sangue para todo o corpo.",
  },
  {
    question:
      "Qual é o nome das principais artérias que levam sangue para fora do coração?",
    options: ["Veias", "Capilares", "Aorta e Pulmonar", "Ventrículos"],
    correctAnswer: "Aorta e Pulmonar",
    explanation:
      "A aorta leva o sangue oxigenado do coração para o resto do corpo, enquanto a artéria pulmonar leva o sangue sem oxigênio dos ventrículos para os pulmões.",
  },
  {
    question:
      "O que são vasos sanguíneos responsáveis por levar sangue de volta ao coração?",
    options: ["Artérias", "Veias", "Capilares", "Ventrículos"],
    correctAnswer: "Veias",
    explanation:
      "As veias são responsáveis por transportar o sangue de volta ao coração após ter passado pelos tecidos do corpo.",
  },
  {
    question: "Qual é o tipo de sangue que contém mais oxigênio?",
    options: ["Tipo A", "Tipo B", "Tipo AB", "Tipo O"],
    correctAnswer: "Tipo A",
    explanation:
      "O tipo sanguíneo A é conhecido por ter mais oxigênio do que os outros tipos.",
  },
  {
    question: "O que é a pressão arterial diastólica?",
    options: [
      "Pressão máxima",
      "Pressão mínima",
      "Pressão média",
      "Pressão normal",
    ],
    correctAnswer: "Pressão mínima",
    explanation:
      "A pressão arterial diastólica é o valor mais baixo da pressão arterial, representando a pressão durante a fase de relaxamento do coração.",
  },
  {
    question: "Quais são os principais componentes do sangue?",
    options: [
      "Água e proteínas",
      "Plaquetas e anticorpos",
      "Glóbulos vermelhos e plaquetas",
      "Glóbulos vermelhos e glóbulos brancos",
    ],
    correctAnswer: "Glóbulos vermelhos e glóbulos brancos",
    explanation:
      "Os glóbulos vermelhos são responsáveis pelo transporte de oxigênio, enquanto os glóbulos brancos são células do sistema imunológico.",
  },
  {
    question:
      "Qual é o nome do processo pelo qual o sangue é distribuído pelo corpo?",
    options: ["Circulação", "Digestão", "Respiração", "Excreção"],
    correctAnswer: "Circulação",
    explanation:
      "A circulação é o processo pelo qual o sangue é bombeado pelo coração e distribuído por todo o corpo através dos vasos sanguíneos.",
  },
  {
    question: "O que é a hemoglobina?",
    options: [
      "Proteína presente no plasma",
      "Célula sanguínea",
      "Célula muscular",
      "Proteína presente nos glóbulos vermelhos",
    ],
    correctAnswer: "Proteína presente nos glóbulos vermelhos",
    explanation:
      "A hemoglobina é uma proteína presente nos glóbulos vermelhos que se liga ao oxigênio e o transporta para os tecidos do corpo.",
  },
  {
    question:
      "Qual é o nome da doença caracterizada pelo acúmulo de placas de gordura nas artérias?",
    options: [
      "Hipertensão",
      "Arritmia",
      "Aterosclerose",
      "Insuficiência cardíaca",
    ],
    correctAnswer: "Aterosclerose",
    explanation:
      "A aterosclerose é uma condição em que as artérias se tornam estreitas e rígidas devido ao acúmulo de placas de gordura, o que pode levar a problemas de saúde, como ataques cardíacos e derrames.",
  },
  {
    question:
      "Qual é o nome da válvula localizada entre o átrio esquerdo e o ventrículo esquerdo do coração?",
    options: [
      "Válvula tricúspide",
      "Válvula mitral",
      "Válvula aórtica",
      "Válvula pulmonar",
    ],
    correctAnswer: "Válvula mitral",
    explanation:
      "A válvula mitral, também conhecida como válvula bicúspide, é uma das principais válvulas cardíacas que controla o fluxo sanguíneo entre o átrio esquerdo e o ventrículo esquerdo.",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const explanationElement = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      checkAnswer(option === currentQuestion.correctAnswer)
    );
    optionsElement.appendChild(button);
  });

  explanationElement.textContent = "";
  nextButton.style.display = "none";
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    explanationElement.textContent = "Resposta correta!";
    explanationElement.style.color = "green";
  } else {
    explanationElement.textContent =
      "Resposta incorreta. A resposta correta é: " +
      quizData[currentQuestionIndex].correctAnswer;
    explanationElement.style.color = "red";
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    currentQuestionIndex = 0;
    loadQuestion();
  }
});

loadQuestion();
