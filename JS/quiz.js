// ================= ELEMENTS =================

const startBtn = document.getElementById("startQuiz");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const questionCount = document.getElementById("questionCount");

const quizStart = document.querySelector(".quiz-start");
const quizContainer = document.getElementById("quizContainer");

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// ================= VARIABLES =================

let allQuestions = [];
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;

let timer;
let timeLeft = 30;

// ================= LOAD QUESTIONS =================

async function loadQuestions() {

    try {

        const response = await fetch("../Data/quiz.json");

        allQuestions = await response.json();

        console.log("Questions Loaded:", allQuestions);

    } catch (error) {

        console.log("Questions not loaded", error);

    }

}

loadQuestions();

// ================= START QUIZ =================

startBtn.addEventListener("click", () => {

    const selectedCategory = category.value;
    const selectedDifficulty = difficulty.value;
    const totalQuestions = parseInt(questionCount.value);

    quizQuestions = allQuestions.filter(question =>

        question.category === selectedCategory &&
        question.difficulty === selectedDifficulty

    );

    quizQuestions = quizQuestions.sort(() => Math.random() - 0.5);

    quizQuestions = quizQuestions.slice(0, totalQuestions);

    if (quizQuestions.length === 0) {

        alert("No Questions Found!");

        return;

    }

    currentQuestion = 0;
    score = 0;

    showQuestion();

});

// ================= SHOW QUESTION =================

function showQuestion() {

    quizStart.style.display = "none";

    quizContainer.style.display = "flex";

    const current = quizQuestions[currentQuestion];

    questionText.innerText = current.question;

    optionsContainer.innerHTML = "";

    current.options.forEach(option => {

        const button = document.createElement("button");

        button.innerText = option;

        button.classList.add("option-btn");

        button.addEventListener("click", () => {

            document.querySelectorAll(".option-btn").forEach(btn => {

                btn.disabled = true;

            });

           if (option === current.correctAnswer) {

                button.style.background = "green";

                score++;

            } else {

                button.style.background = "red";

            }

        });

        optionsContainer.appendChild(button);

    });
    document.getElementById("questionNumber").innerText =
`Question ${currentQuestion + 1} / ${quizQuestions.length}`;

document.getElementById("progressBar").style.width =
`${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

startTimer();

}

// ================= NEXT BUTTON =================

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        showQuestion();

    } else {

        localStorage.setItem("score", score);
localStorage.setItem("total", quizQuestions.length);

window.location.href = "../html/result.html";

    }

});
function startTimer() {

    clearInterval(timer);

    timeLeft = 30;

    document.getElementById("timer").innerText = "⏱ " + timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerText = "⏱ " + timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            nextBtn.click();

        }

    },1000);

}