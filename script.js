const questions = [
    {
        question: "Solve for x: $$3x(2x + 1) = 0$$",
        answer: ["0", "-1/2"],
        explanation: "The solutions are x = 0 or x = -1/2."
    },
    {
        "question": "$$Solve for x: 2x^2+7x-1=0$$",
        "answer": [
            "0.1",
            "-3.6"
        ],
        "explanation": ""
    }
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = questions[randomIndex].question;
    questionContainer.setAttribute("data-index", randomIndex);
    MathJax.typeset(); // Rerender MathJax expressions
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const questionContainer = document.getElementById("question");
    const questionIndex = questionContainer.getAttribute("data-index");
    const userAnswer = document.getElementById("answer").value.trim();
    const resultContainer = document.getElementById("result");

    if (questions[questionIndex].answer.includes(userAnswer)) {
        resultContainer.textContent = "Correct!";
        resultContainer.style.color = "green";
    } else {
        resultContainer.textContent = "Incorrect! Try again or click 'Show Answer' to reveal.";
        resultContainer.style.color = "red";
    }
}

function showAnswer() {
    const questionContainer = document.getElementById("question");
    const questionIndex = questionContainer.getAttribute("data-index");
    const resultContainer = document.getElementById("result");

    resultContainer.textContent = `Answer: ${questions[questionIndex].explanation}`;
    resultContainer.style.color = "blue";
}

// Initialize with a random question on page load
window.onload = getRandomQuestion;
