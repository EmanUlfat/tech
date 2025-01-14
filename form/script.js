//calculator.js

// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch {
        display.value = 'Error'; // Display an error for invalid expressions
    }
}

//signup/login.js
function validateForm(formType) {
    // Common elements
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Common error elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Clear common errors
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent =
            "Password must contain one uppercase, one lowercase, one number, and be at least 8 characters long.";
        isValid = false;
    }

    // Specific logic for signup form
    if (formType === "signup") {
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Specific error elements
        const nameError = document.getElementById("nameError");
        const phoneError = document.getElementById("phoneError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        // Clear specific errors
        nameError.textContent = "";
        phoneError.textContent = "";
        confirmPasswordError.textContent = "";

        // Name validation
        if (name === "") {
            nameError.textContent = "Name cannot be empty.";
            isValid = false;
        }

        // Phone number validation
        const phonePattern = /^\+92[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            phoneError.textContent = "Phone number must be 11 digits and start with +92.";
            isValid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        // If signup validations pass
        if (isValid) {
            alert(`Signup successful!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
        }
    }

    // Specific logic for login form
    if (formType === "login") {
        // If login validations pass
        if (isValid) {
            alert(`Login successful!\n\nEmail: ${email}\nPassword: ${password}`);
        }
    }
}
document.getElementById("signupForm").addEventListener("reset", function () {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(error => (error.textContent = ""));
});
