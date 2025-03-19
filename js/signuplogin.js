document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.querySelector(".signin-btn");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");

    // Function to show error messages (ensuring no overlap)
    function showError(input, message) {
        clearError(input);

        let errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = message;

        let parentDiv = input.parentNode;
        if (parentDiv.classList.contains("password-group")) {
            parentDiv.insertBefore(errorSpan, input.nextSibling); // Ensures eye icon is not affected
        } else {
            parentDiv.appendChild(errorSpan);
        }

        input.classList.add("error-border");
    }

    // Function to clear error messages
    function clearError(input) {
        let errorSpans = input.parentNode.querySelectorAll(".error-message");
        errorSpans.forEach(span => span.remove());
        input.classList.remove("error-border");
    }

    // Add eye icon once (Prevents overlapping issue)
    let eyeIcon = document.createElement("i");
    eyeIcon.classList.add("fas", "fa-eye", "toggle-password");
    eyeIcon.style.position = "absolute";
    eyeIcon.style.right = "12px";
    eyeIcon.style.top = "50%";
    eyeIcon.style.transform = "translateY(-50%)";
    eyeIcon.style.cursor = "pointer";

    // Ensure password field has an icon
    let passwordGroup = passwordInput.parentNode;
    if (!passwordGroup.querySelector(".toggle-password")) {
        passwordGroup.appendChild(eyeIcon);
    }

    // Toggle password visibility
    function togglePasswordVisibility() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash"); // Strikethrough icon
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye"); // Normal eye icon
        }
    }

    // Add event listener to eye icon
    eyeIcon.addEventListener("click", togglePasswordVisibility);

    // Sign-in validation
    signInBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

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
            showError(passwordInput, "Password must contain at least 8 characters including 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        // If valid, proceed with login
        if (isValid) {
            window.location.href = "basicinfo.html"; // Navigating to dashboard after validation
        }
    });
});
