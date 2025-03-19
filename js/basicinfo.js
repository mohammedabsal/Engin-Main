document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("profile-form");
    const nextButton = document.getElementById("next-step-btn");

    nextButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default button behavior

        let isValid = true;
        const inputs = document.querySelectorAll(".input-field");

        // Loop through all input fields to check for empty values
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = "red"; // Highlight empty fields
                input.reportValidity(); // Show built-in error message
            } else {
                input.style.borderColor = "lightgray"; // Reset valid fields
            }
        });

        if (isValid) {
            form.submit(); // Submit the form if valid (or navigate)
            window.location.href = "skillsinterests.html"; 
        }
    });
});
