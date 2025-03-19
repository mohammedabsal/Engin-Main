document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("profile-form");
    const checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
    const experienceDropdown = document.getElementById("experience");
    const availabilityDropdown = document.getElementById("availability");
    const backBtn = document.getElementById("back-btn");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Check if at least one checkbox is selected
        const isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!isCheckboxChecked) {
            isValid = false;
            alert("Please select at least one area of interest.");
        }

        // Check if dropdowns have a valid selection
        if (experienceDropdown.value === "Select experience") {
            isValid = false;
            alert("Please select your years of experience.");
        }
        if (availabilityDropdown.value === "Select availability") {
            isValid = false;
            alert("Please select your availability.");
        }

        // If any field is invalid, prevent form submission
        if (!isValid) {
            event.preventDefault();
        } else {
            // If all fields are valid, navigate to engindashboard.html
            event.preventDefault(); // Prevent form's default submission
            window.location.href = "engindashboard.html";
        }
    });

    // Navigate back to Basic Info page
    backBtn.addEventListener("click", function () {
        window.location.href = "basicinfo.html";
    });
});
