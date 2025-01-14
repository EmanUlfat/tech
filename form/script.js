function validateForm(formType) {
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;
    let isAnyFieldEmpty = false;

  
    
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        emailError.textContent = "Email cannot be empty.";
        isValid = false;
        isAnyFieldEmpty = true;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password === "") {
        passwordError.textContent = "Password cannot be empty.";
        isValid = false;
        isAnyFieldEmpty = true;
    } else if (!passwordPattern.test(password)) {
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
        if (phone === "") {
            phoneError.textContent = "Phone number cannot be empty.";
            isValid = false;
            isAnyFieldEmpty = true;
        } else if (!phonePattern.test(phone)) {
            phoneError.textContent = "Phone number must be 11 digits and start with +92.";
            isValid = false;
        }

        
        if (confirmPassword === "") {
            confirmPasswordError.textContent = "Confirm Password cannot be empty.";
            isValid = false;
            isAnyFieldEmpty = true;
        } else if (password !== confirmPassword) {
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
document.getElementById("signupForm").addEventListener("reset", function () {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(error => (error.textContent = ""));
});
