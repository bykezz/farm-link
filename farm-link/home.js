const signUpButton = document.getElementById("signup-btn");
signUpButton.addEventListener("click", function () {
    window.location.href = "signup.html";
});
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function () {
    window.location.href = "login.html";
});
const getStartedButton = document.getElementById("getstarted-btn");
getStartedButton.addEventListener("click", function () {
    window.location.href = "login.html";
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}