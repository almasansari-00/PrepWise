// ================= ELEMENTS =================

const startBtn = document.getElementById("startInterview");

const category = document.getElementById("category");

const difficulty = document.getElementById("difficulty");

const interviewStart = document.querySelector(".interview-start");

const interviewContainer = document.getElementById("interviewContainer");

const questionText = document.getElementById("question");

// ================= VARIABLES =================

let allQuestions = [];

let interviewQuestions = [];

let currentQuestion = 0;

let timer;
let timeLeft = 60;

// ================= LOAD QUESTIONS =================



async function loadInterview() {

    const response = await fetch("../Data/questions.json");

    allQuestions = await response.json();

    console.log(allQuestions);

}


loadInterview();

// ================= START =================

startBtn.addEventListener("click", () => {

    console.log("Category:", category.value);
    console.log("Difficulty:", difficulty.value);

    interviewQuestions = allQuestions.filter(q =>
        q.category === category.value &&
        q.difficulty === difficulty.value
    );

    console.log(interviewQuestions);

    


    if(interviewQuestions.length===0){

        alert("No Questions Found");

        return;

    }

    currentQuestion++;

    showQuestion();

});

// ================= SHOW QUESTION =================

function showQuestion(){

    interviewStart.style.display="none";

    interviewContainer.style.display="flex";

   questionText.innerText =
    interviewQuestions[currentQuestion].title;
    function startTimer() {

    clearInterval(timer);

    timeLeft = 60;

    document.getElementById("timer").innerText = "⏱ " + timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerText = "⏱ " + timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            nextBtn.click();

        }

    }, 1000);

}
startTimer();

}

const answerBox = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");

let userAnswers = [];
nextBtn.addEventListener("click", () => {

    // User ka answer save karo
    userAnswers.push({
        question: interviewQuestions[currentQuestion].question,
        answer: answerBox.value
    });

    answerBox.value = "";

    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < interviewQuestions.length) {

        showQuestion();

    } else {

        localStorage.setItem("answered", userAnswers.filter(a => a.answer !== "Skipped").length);

      localStorage.setItem("skipped", userAnswers.filter(a => a.answer === "Skipped").length);

     localStorage.setItem("total", interviewQuestions.length);

      window.location.href = "interview-result.html";

        console.log(userAnswers);

    }

});

skipBtn.addEventListener("click", () => {

    userAnswers.push({
        question: interviewQuestions[currentQuestion].question,
        answer: "Skipped"
    });

    answerBox.value = "";

    currentQuestion++;

    if (currentQuestion < interviewQuestions.length) {

        showQuestion();

    } else {

        alert("Interview Completed!");

    }

});