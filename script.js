const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

// Get saved answers from sessionStorage
let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || [];


// Save selected answer whenever a radio button is clicked
questionsElement.addEventListener("change", function(event) {
  if (event.target.type === "radio") {
    const questionNumber = Number(
      event.target.name.replace("question-", "")
    );

    userAnswers[questionNumber] = event.target.value;

    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});


// Submit quiz
submitButton.addEventListener("click", function() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  scoreElement.textContent = "Your score is " + score + " out of 5.";

  localStorage.setItem("score", score);
});


// Show previous score if it exists
const savedScore = localStorage.getItem("score");

if (savedScore !== null) {
  scoreElement.textContent =
    "Your score is " + savedScore + " out of 5.";
}