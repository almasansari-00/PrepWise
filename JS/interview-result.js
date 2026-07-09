const answered = localStorage.getItem("answered") || 0;

const skipped = localStorage.getItem("skipped") || 0;

const total = localStorage.getItem("total") || 0;

document.getElementById("answered").innerText =
"Answered : " + answered;

document.getElementById("skipped").innerText =
"Skipped : " + skipped;

document.getElementById("total").innerText =
"Total Questions : " + total;