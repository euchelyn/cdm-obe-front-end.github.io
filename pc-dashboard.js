document.addEventListener("DOMContentLoaded", function() {

    // 1. Theme feasible toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement; // Targets the <html> tag

    // Need to initialize the button text correctly on load
    if (rootElement.getAttribute('data-theme') === 'dark') {
        themeToggle.innerText = "☀️ Light Mode";
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = rootElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                rootElement.setAttribute('data-theme', 'light');
                themeToggle.innerText = "🌙 Dark Mode";
            } else {
                rootElement.setAttribute('data-theme', 'dark');
                themeToggle.innerText = "☀️ Light Mode";
            }
        });
    }

    // 2. Existing Logout logic (already present, kept for completeness)
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to log out?")) {
                window.location.href = "index.html"; 
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    // Check if there's a saved theme preference
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

    // --- 2. LOGOUT LOGIC ---
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to log out?")) {
                window.location.href = "index.html"; 
            }
        });
    }

    // --- 3. CHART.JS INTERACTIVE GRAPHS ---
    
    // Default chart font color that looks good on both Light and Dark mode
    Chart.defaults.color = '#8892b0'; 
    Chart.defaults.font.family = "'Segoe UI', sans-serif";

    // A. The Bar Chart (Employment Data)
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Software Engineer', 'Network Admin', 'System Analyst', 'IT Support', 'Further Studies'],
            datasets: [{
                label: 'Number of Alumni',
                data: [45, 25, 20, 15, 10],
                backgroundColor: '#ffd700', // CDM Gold
                borderColor: '#e6c200',
                borderWidth: 1,
                borderRadius: 4 // Gives the bars smooth rounded edges
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false } // Hides the top label to save space
            },
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(136, 146, 176, 0.1)' } },
                x: { grid: { display: false } }
            }
        }
    });

    // B. The Pie Chart (OBE Alignment)
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'doughnut', // 'doughnut' looks more modern than a solid 'pie'
        data: {
            labels: ['Highly Aligned', 'Adequate', 'Needs Revision'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: [
                    '#0a192f', // Deep Navy
                    '#ffd700', // Gold
                    '#ef4444'  // Warning Red
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%', // Makes the doughnut ring thinner
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

});