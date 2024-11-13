document.addEventListener('DOMContentLoaded', () => {
    // Create and append theme toggle button
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.innerHTML = '🌙'; // Moon emoji for dark mode toggle
    document.body.appendChild(button);

    // Set initial theme
    const root = document.documentElement;
    root.setAttribute('data-theme', 'light');

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
        button.innerHTML = newTheme === 'light' ? '🌙' : '☀️'; // Moon or sun emoji
        localStorage.setItem('theme', newTheme);
    }

    // Add click event listener
    button.addEventListener('click', toggleTheme);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        button.innerHTML = savedTheme === 'light' ? '🌙' : '☀️';
    }
});
