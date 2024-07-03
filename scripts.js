document.addEventListener('DOMContentLoaded', () => {
    // Display the current year in the footer
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Toggle dark and light mode
    const toggleThemeButton = document.getElementById('toggle-theme');
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });


     // Display the current time in UTC and the current day of the week
     const updateTimeAndDay = () => {
        const currentTimeUTC = new Date().toUTCString();
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('current-time-utc').textContent = currentTimeUTC;
        document.getElementById('current-day').textContent = currentDay;
    };

    // Update time and day immediately and then every second
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
