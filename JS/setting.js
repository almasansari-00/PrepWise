// ================= ELEMENTS =================

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const notificationToggle = document.getElementById("notifications");

const darkModeToggle = document.getElementById("darkMode");

const saveBtn = document.getElementById("saveBtn");

const logoutBtn = document.getElementById("logoutBtn");

// ================= SAVE =================

saveBtn.addEventListener("click", () => {

    alert("Settings Saved Successfully!");

    console.log({

        name: nameInput.value,

        email: emailInput.value,

        password: passwordInput.value,

        notifications: notificationToggle.checked,

        darkMode: darkModeToggle.checked

    });

});

// ================= LOGOUT =================

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if(confirmLogout){

        alert("Logged Out Successfully!");

        window.location.href = "../html/login.html";

    }

});

// ================= DARK MODE =================

darkModeToggle.addEventListener("change", () => {

    if(darkModeToggle.checked){

        alert("Dark Mode Enabled");

    }else{

        alert("Light Mode will be available soon.");

    }

});

// ================= NOTIFICATIONS =================

notificationToggle.addEventListener("change", () => {

    if(notificationToggle.checked){

        alert("Notifications Enabled");

    }else{

        alert("Notifications Disabled");

    }

});