// ================= CONTAINER =================

const container = document.getElementById("questionContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let questions = [];


// ================= LOAD QUESTIONS =================

async function loadQuestions() {

    try {

        const response = await fetch("../Data/questions.json");

        questions = await response.json();

        displayQuestions(questions);

    } catch (error) {

        container.innerHTML = "<h2>Unable to load questions.</h2>";

        console.error(error);

    }

}


// ================= DISPLAY QUESTIONS =================

function displayQuestions(data) {

    container.innerHTML = "";

    if (data.length === 0) {

        container.innerHTML = "<h2>No Questions Found.</h2>";

        return;

    }

    data.forEach(question => {

        container.innerHTML += `

        <div class="question-card">

            <div class="card-top">

                <h3>${question.title}</h3>

                <i class="fa-regular fa-heart bookmark"
                   data-id="${question.id}">
                </i>

            </div>

            <p><strong>Category:</strong> ${question.category}</p>

            <p class="${question.difficulty.toLowerCase()}">
                <strong>Difficulty:</strong> ${question.difficulty}
            </p>

            <button class="view-btn">
                View Answer
            </button>

            <div class="answer" style="display:none; margin-top:15px;">

                ${question.answer}

            </div>

        </div>

        `;

    });

    addEvents();

    setupBookmarks();

}


// ================= VIEW ANSWER =================

function addEvents() {

    const buttons = document.querySelectorAll(".view-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const answer = button.nextElementSibling;

            if (answer.style.display === "none") {

                answer.style.display = "block";

                button.innerText = "Hide Answer";

            }

            else {

                answer.style.display = "none";

                button.innerText = "View Answer";

            }

        });

    });

}


// ================= SEARCH =================

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = questions.filter(question =>

        question.title.toLowerCase().includes(value)

    );

    displayQuestions(filtered);

});


// ================= FILTER =================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>

            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "All") {

            displayQuestions(questions);

        }

        else {

            const filtered = questions.filter(question =>

                question.category === category

            );

            displayQuestions(filtered);

        }

    });

});


// ================= BOOKMARK =================

function setupBookmarks() {

    const bookmarks = document.querySelectorAll(".bookmark");

    bookmarks.forEach(icon => {

        const id = icon.dataset.id;

        let saved =
            JSON.parse(localStorage.getItem("bookmarks")) || [];

        if (saved.includes(id)) {

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid", "saved");

        }

        icon.addEventListener("click", () => {

            let saved =
                JSON.parse(localStorage.getItem("bookmarks")) || [];

            if (saved.includes(id)) {

                saved = saved.filter(item => item !== id);

                icon.classList.remove("fa-solid", "saved");

                icon.classList.add("fa-regular");

            }

            else {

                saved.push(id);

                icon.classList.remove("fa-regular");

                icon.classList.add("fa-solid", "saved");

            }

            localStorage.setItem("bookmarks", JSON.stringify(saved));

        });

    });

}


// ================= START =================

loadQuestions();