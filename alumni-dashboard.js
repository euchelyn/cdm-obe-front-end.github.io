document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    // Load saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        rootElement.setAttribute('data-theme', 'dark');
        themeToggle.innerText = "☀️ Light Mode";
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = rootElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                rootElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.innerText = "🌙 Dark Mode";
            } else {
                rootElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerText = "☀️ Light Mode";
            }
        });
    }

    // Logout logic
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to log out?")) {
                window.location.href = "index.html"; 
            }
        });
    }
});