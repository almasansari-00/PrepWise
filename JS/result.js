const score = localStorage.getItem("score");
const total = localStorage.getItem("total");

document.getElementById("score").innerText =
`${score} / ${total}`;

const accuracy = ((score / total) * 100).toFixed(0);

document.getElementById("accuracy").innerText =
`Accuracy : ${accuracy}%`;

function restartQuiz(){

    window.location.href = "../html/quiz.html";

}