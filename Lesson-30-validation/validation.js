const loginForm = document.querySelector("#loginForm");

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

emailInput.addEventListener("input", (e) => {
    const emailValue = e.target.value;

    if (emailValue.length === 0) {
        emailError.textContent = "Email is required.";
    } else if (!emailValue.includes("@")) {
        emailError.textContent = "Email must contain '@'.";
    } else {
        emailError.textContent = "";
    }
});

passwordInput.addEventListener("input", (e) => {
    const passwordValue = e.target.value;

    if (passwordValue.length === 0) {
        passwordError.textContent = "Password is required.";
    } else if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
    } else {
        passwordError.textContent = "";
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = loginForm.email.value;
    const passwordValue = loginForm.password.value;

    if (emailValue.length === 0) {
        emailError.textContent = "Email is required.";
    }

    if (passwordValue.length === 0) {
        passwordError.textContent = "Password is required.";
    }

    if (emailValue.length > 0 && passwordValue.length > 0) {
        // Form is valid, you can submit it or perform further actions
        alert(`Form submitted with Email: ${emailValue} and Password: ${passwordValue}`);
    }
});
