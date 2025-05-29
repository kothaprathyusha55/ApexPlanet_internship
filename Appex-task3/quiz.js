const quiz = {
  question: "What does CSS stand for?",
  correct: "B",
  options: {
    A: "Creative Style Sheets",
    B: "Cascading Style Sheets",
    C: "Colorful Style Scripts"
  }
};

document.getElementById("question").innerText = quiz.question;

function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === quiz.correct) {
    result.innerText = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.innerText = "❌ Wrong. Try again!";
    result.style.color = "red";
  }
}
