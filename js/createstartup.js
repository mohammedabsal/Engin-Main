document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("startup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Collect form data
        const startupData = {
            projectTitle: document.getElementById("project-title").value.trim(),
            category: document.getElementById("category").value,
            problemStatement: document.getElementById("problem-statement").value.trim(),
            solution: document.getElementById("solution").value.trim(),
            requiredSkills: document.getElementById("required-skills").value.trim(),
            teamSize: document.getElementById("team-size").value.trim(),
            patentInfo: document.getElementById("patent-information").value.trim(),
        };

        // Validate all fields
        let isValid = true;
        Object.values(startupData).forEach(value => {
            if (!value) {
                isValid = false;
            }
        });

        if (!isValid) {
            alert("Please fill out all required fields.");
            return;
        }

        // File Upload Validation
        const fileInput = document.getElementById("file-upload");
        if (fileInput.files.length === 0) {
            alert("Please upload a pitch deck.");
            return;
        }

        const file = fileInput.files[0];
        const allowedTypes = ["application/pdf", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"];
        if (!allowedTypes.includes(file.type)) {
            alert("Invalid file format. Please upload a PDF or PowerPoint file.");
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert("File size exceeds 10MB limit.");
            return;
        }

        alert("Startup Created Successfully!");
        form.reset(); // Reset form after submission
    });
});
