let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav");

    if (window.scrollY > lastScrollY) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }

    lastScrollY = window.scrollY;
});

var form = document.getElementById("myForm")
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var locationInput = document.getElementById("location");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var locationError = document.getElementById("locationError");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    locationError.textContent = "";

    var isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }
    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Email is invalid.";
        isValid = false;
    }

    // Validate phone
    var phonePattern = /^\d{10,}$/;
    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Phone number is invalid (must be at least 10 digits).";
        isValid = false;
    }

    // Validate location
    if (locationInput.value.trim() === "") {
        locationError.textContent = "Location is required.";
        isValid = false;
    }

    // If all valid, submit form
    if (isValid) {
        alert("Form submitted successfully!");
    }
});
