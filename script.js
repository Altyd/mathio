const questions = {
    math: {
        10: {
            easy: [],
            medium: [],
            hard: []
        },
        11: {
            easy: [
                {
                    question: "Solve for x: $$3x(2x + 1) = 0$$",
                    answer: ["0", "-1/2"],
                    explanation: "The solutions are x = 0 or x = -1/2."
                },
                {
                    question: "Solve for x: $$2x^2 + 3x = 0$$",
                    answer: ["0", "-3/2"],
                    explanation: "The solutions are x = 0 or x = -3/2."
                }
            ],
            medium: [
                {
                    question: "Solve for x: $$x^2 - 5x + 6 = 0$$",
                    answer: ["2", "3"],
                    explanation: "The solutions are x = 2 and x = 3."
                }
            ],
            hard: []
        },
        12: {
            easy: [],
            medium: [],
            hard: []
        }
    },
    physics: {
        10: {
            easy: [],
            medium: [],
            hard: []
        },
        11: {
            easy: [],
            medium: [],
            hard: []
        },
        12: {
            easy: [],
            medium: [],
            hard: []
        }
    }
};

function getRandomQuestion() {
    const grade = document.getElementById('grade-select').value;
    const difficulty = document.getElementById('difficulty-select').value;
    const subject = document.getElementById('subject-select').value;

    const questionsList = questions[subject][grade][difficulty];
    if (questionsList.length === 0) {
        alert("No questions available for the selected options.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * questionsList.length);
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = questionsList[randomIndex].question;
    questionContainer.setAttribute("data-index", randomIndex);
    questionContainer.setAttribute("data-subject", subject);
    questionContainer.setAttribute("data-grade", grade);
    questionContainer.setAttribute("data-difficulty", difficulty);
    MathJax.typeset(); // Rerender MathJax expressions

    document.getElementById("question-container").style.display = "block";
    document.getElementById("answer").style.display = "block";
    document.getElementById("action-buttons").style.display = "block";
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const questionContainer = document.getElementById("question");
    const questionIndex = questionContainer.getAttribute("data-index");
    const subject = questionContainer.getAttribute("data-subject");
    const grade = questionContainer.getAttribute("data-grade");
    const difficulty = questionContainer.getAttribute("data-difficulty");
    const userAnswer = document.getElementById("answer").value.trim();
    const resultContainer = document.getElementById("result");

    const correctAnswers = questions[subject][grade][difficulty][questionIndex].answer;
    const userAnswers = userAnswer.split(" or ").map(a => a.trim());

    if (correctAnswers.length === userAnswers.length && correctAnswers.every((val, index) => val === userAnswers[index])) {
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
    const subject = questionContainer.getAttribute("data-subject");
    const grade = questionContainer.getAttribute("data-grade");
    const difficulty = questionContainer.getAttribute("data-difficulty");
    const resultContainer = document.getElementById("result");

    const explanation = questions[subject][grade][difficulty][questionIndex].explanation;
    resultContainer.textContent = `Answer: ${explanation}`;
    resultContainer.style.color = "blue";
}
