// ================= ELEMENTS =================

const contactForm = document.getElementById("contactForm");

// ================= SUBMIT FORM =================

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === ""){

        alert("Please fill all the fields!");

        return;

    }

    alert("✅ Your message has been sent successfully!");

    contactForm.reset();

});