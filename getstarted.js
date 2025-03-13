document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waiting-list-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;
        const location = document.getElementById("location").value;
        const insights = document.getElementById("insights").value;

        if (fullName && email && role && location) {
            // Redirect to success page
            window.location.href = "success.html";
        } else {
            alert("Please fill out all required fields.");
        }
    });
});
