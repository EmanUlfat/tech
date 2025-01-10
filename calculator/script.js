//calculator.js


function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch {
        display.value = 'Error'; // Display an error for invalid expressions
    }
}

function validateForm(formType) {
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent =
            "Password must contain one uppercase, one lowercase, one number, and be at least 8 characters long.";
        isValid = false;
    }

    
    if (formType === "signup") {
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

       
        const nameError = document.getElementById("nameError");
        const phoneError = document.getElementById("phoneError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

     
        nameError.textContent = "";
        phoneError.textContent = "";
        confirmPasswordError.textContent = "";

        
        if (name === "") {
            nameError.textContent = "Name cannot be empty.";
            isValid = false;
        }

        
        const phonePattern = /^\+92[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            phoneError.textContent = "Phone number must be 11 digits and start with +92.";
            isValid = false;
        }

        
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        
        if (isValid) {
            alert(`Signup successful!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
        }
    }

    
    if (formType === "login") {
        
        if (isValid) {
            alert(`Login successful!\n\nEmail: ${email}\nPassword: ${password}`);
        }
    }
}

