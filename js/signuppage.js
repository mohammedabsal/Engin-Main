document.addEventListener("DOMContentLoaded", function () {
    const roleButtons = document.querySelectorAll(".unique-role-selection button");
    const signUpBtn = document.querySelector(".unique-signup-btn");
    const firstNameInput = document.getElementById("unique-first-name");
    const lastNameInput = document.getElementById("unique-last-name");
    const emailInput = document.getElementById("unique-email");
    const passwordInput = document.getElementById("unique-password");
    const confirmPasswordInput = document.getElementById("unique-confirm-password");

    // Role selection functionality
    roleButtons.forEach(button => {
        button.addEventListener("click", function () {
            roleButtons.forEach(btn => btn.classList.remove("selected-role"));
            this.classList.add("selected-role");
        });
    });

    // Function to show error messages
    function showError(input, message) {
        clearError(input);

        let errorSpan = document.createElement("span");
        errorSpan.classList.add("unique-error-message");
        errorSpan.textContent = message;

        let parentDiv = input.parentNode;
        parentDiv.appendChild(errorSpan);

        input.classList.add("unique-error-border");
    }

    // Function to clear error messages
    function clearError(input) {
        let errorSpans = input.parentNode.querySelectorAll(".unique-error-message");
        errorSpans.forEach(span => span.remove());
        input.classList.remove("unique-error-border");
    }

    // Function to add an eye icon for password fields
    function addEyeIcon(inputField) {
        let eyeIcon = document.createElement("i");
        eyeIcon.classList.add("fas", "fa-eye", "unique-toggle-password");
        eyeIcon.style.position = "absolute";
        eyeIcon.style.right = "12px";
        eyeIcon.style.top = "35%";
        eyeIcon.style.transform = "translateY(-50%)";
        eyeIcon.style.cursor = "pointer";

        let parentDiv = inputField.parentNode;
        if (!parentDiv.querySelector(".unique-toggle-password")) {
            parentDiv.appendChild(eyeIcon);
        }

        // Toggle password visibility
        eyeIcon.addEventListener("click", function () {
            if (inputField.type === "password") {
                inputField.type = "text";
                eyeIcon.classList.remove("fa-eye");
                eyeIcon.classList.add("fa-eye-slash");
            } else {
                inputField.type = "password";
                eyeIcon.classList.remove("fa-eye-slash");
                eyeIcon.classList.add("fa-eye");
            }
        });
    }

    // Add eye icon to Password and Confirm Password fields
    addEyeIcon(passwordInput);
    addEyeIcon(confirmPasswordInput);

    // Sign-up validation
    signUpBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        let isValid = true;

        // Check if a role is selected
        const selectedRole = document.querySelector(".unique-role-selection button.selected-role");
        if (!selectedRole) {
            alert("Please select a role.");
            return; // Stops further execution
        }

        // First Name validation (Required)
        if (firstName === "") {
            showError(firstNameInput, "First Name is required.");
            isValid = false;
        } else {
            clearError(firstNameInput);
        }

        // Last Name validation (Required)
        if (lastName === "") {
            showError(lastNameInput, "Last Name is required.");
            isValid = false;
        } else {
            clearError(lastNameInput);
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            showError(passwordInput, "Password must be at least 8 characters long, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        // Confirm Password validation
        if (confirmPassword !== password) {
            showError(confirmPasswordInput, "Passwords do not match.");
            isValid = false;
        } else {
            clearError(confirmPasswordInput);
        }

        // If valid, proceed with signup
        if (isValid) {
            window.location.href = "basicinfo.html"; // Navigating to the dashboard after validation
        }
    });
});
