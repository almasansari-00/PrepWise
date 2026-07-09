// ================= WELCOME MESSAGE =================

const heading = document.querySelector("header h1");

const hour = new Date().getHours();

if (hour < 12) {
    heading.innerHTML = "Good Morning ☀️";
}
else if (hour < 18) {
    heading.innerHTML = "Good Afternoon 🌤️";
}
else {
    heading.innerHTML = "Good Evening 🌙";
}


// ================= PROGRESS BAR ANIMATION =================

window.addEventListener("load", () => {

    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "80%";
    document.querySelector(".js").style.width = "65%";
    document.querySelector(".goal").style.width = "60%";

});


// ================= SIDEBAR ACTIVE =================

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


// ================= CARD ANIMATION =================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});