import { 
    auth, 
    createUserProfile,
    authStateListener
} from './auth.js';

document.addEventListener("DOMContentLoaded", function () {
    let currentUser = null;

    // Check if user is signed in
    authStateListener((user) => {
        if (user) {
            currentUser = user;
        } else {
            // No user is signed in, redirect to sign-in page
            window.location.href = 'signuplogin.html';
        }
    });

    const form = document.getElementById("profile-form");
    const checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
    const experienceDropdown = document.getElementById("experience");
    const availabilityDropdown = document.getElementById("availability");
    const backBtn = document.getElementById("back-btn");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        
        if (!currentUser) {
            alert("You must be logged in to update your profile.");
            return;
        }

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
            return;
        }

        // Collect selected interests
        const interests = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        try {
            // Update user profile in Firestore
            await createUserProfile(currentUser.uid, {
                skillsInterests: {
                    interests,
                    experience: experienceDropdown.value,
                    availability: availabilityDropdown.value
                },
                skillsInterests: true, // Mark skills and interests as completed
                profileCompleted: true  // Mark the entire profile as completed
            });
            
            // Redirect to dashboard
            window.location.href = "engindashboard.html";
        } catch (error) {
            console.error("Error updating skills and interests:", error);
            alert(`Error updating profile: ${error.message}`);
        }
    });

    // Navigate back to Basic Info page
    backBtn.addEventListener("click", function () {
        window.location.href = "basicinfo.html";
    });
});