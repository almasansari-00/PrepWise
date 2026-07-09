// ================= ELEMENTS =================

const editBtn = document.getElementById("editBtn");

const userName = document.getElementById("userName");

const userEmail = document.getElementById("userEmail");

const role = document.querySelector(".role");

// ================= EDIT PROFILE =================

editBtn.addEventListener("click", () => {

    const newName = prompt("Enter Your Name", userName.innerText);

    if (newName !== null && newName.trim() !== "") {

        userName.innerText = newName;

    }

    const newEmail = prompt("Enter Your Email", userEmail.innerText);

    if (newEmail !== null && newEmail.trim() !== "") {

        userEmail.innerText = newEmail;

    }

    const newRole = prompt("Enter Your Role", role.innerText);

    if (newRole !== null && newRole.trim() !== "") {

        role.innerText = newRole;

    }

    alert("Profile Updated Successfully!");

});