document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar');
    generateCalendar(calendarContainer);
});

function generateCalendar(container) {
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        
        const menu = document.createElement('div');
        menu.classList.add('menu');
        menu.textContent = 'Options for ' + day; // Placeholder for your menu content
        dayElement.appendChild(menu);
        
        dayElement.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
        
        container.appendChild(dayElement);
    }
}
