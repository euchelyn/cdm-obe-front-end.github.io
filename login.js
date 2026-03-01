// File: login.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    const loginForm = document.getElementById("loginForm");
    const userRoleSelect = document.getElementById("userRole");

    // Listen for form submissions
    loginForm.addEventListener("submit", function(event) {
        // Prevents the page from refreshing on form submission
        event.preventDefault(); 

        const selectedRole = userRoleSelect.value;
        const username = document.getElementById("username").value;

        // Basic validation for the dropdown
        if (!selectedRole) {
            alert("Please select a user role.");
            return;
        }

        // Branching logic to simulate the three dashboard paths from the drawing
        // NOTE: These are placeholders. You would connect to your specific HTML/PHP/other pages here.
        if (selectedRole === "faculty") {
            alert(`Logging in as Program Chair/Faculty (${username})... Redirecting to overview with 58/67 answered.`);
            // window.location.href = "pc_dashboard.html";
        } else if (selectedRole === "alumni") {
            alert(`Logging in as Alumni (${username})... Redirecting to Bachelor of BS 67 profile with 67% progress.`);
            // window.location.href = "alumni_dashboard.html";
        } else if (selectedRole === "employer") {
            alert(`Logging in as Employer... Redirecting to Alumni/Employer Evaluation start page.`);
            // window.location.href = "employer_dashboard.html";
        } else {
            alert("Invalid role selected.");
        }
    });
}); 