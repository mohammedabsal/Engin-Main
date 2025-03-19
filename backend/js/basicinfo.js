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
    const nextBtn = document.getElementById("next-step-button");
    const backBtn = document.getElementById("back-button");

    // Handle back button (if exists)
     // Next button functionality (if form is outside a form or using custom submission)
     if (nextBtn && !form) {
        nextBtn.addEventListener("click", async function() {
            // Similar implementation as form submission above
            // ... (get form values)
            
            try {
                // Update user profile
                // ... (same as above)
                
                window.location.href = "skillsinterests.html";
            } catch (error) {
                console.error("Error updating basic info:", error);
                alert(`Error updating profile: ${error.message}`);
            }
        });
    }
    if (backBtn) {
        backBtn.addEventListener("click", function() {
            window.location.href = "signuppage.html";
        });
    }

    // Form submission
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            
            if (!currentUser) {
                alert("You must be logged in to update your profile.");
                return;
            }

            // Get form values
            const bio = document.getElementById("bio")?.value.trim();
            const location = document.getElementById("location")?.value.trim();
            const company = document.getElementById("company")?.value.trim();
            const jobTitle = document.getElementById("job-title")?.value.trim();
            const website = document.getElementById("website")?.value.trim();
            const linkedin = document.getElementById("linkedin")?.value.trim();
            const github = document.getElementById("github")?.value.trim();
            
            try {
                // Update user profile in Firestore
                await createUserProfile(currentUser.uid, {
                    basicInfo: {
                        bio,
                        location,
                        company,
                        jobTitle,
                        website,
                        linkedin,
                        github
                    },
                    basicInfo: true  // Mark basic info as completed
                });
                
                // Redirect to skills and interests page
                window.location.href = "skillsinterests.html";
            } catch (error) {
                console.error("Error updating basic info:", error);
                alert(`Error updating profile: ${error.message}`);
            }
        });
    }

   
});