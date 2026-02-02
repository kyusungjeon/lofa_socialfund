document.addEventListener('DOMContentLoaded', () => {
    // Check if user is admin
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser !== 'admin') {
        alert('접근 권한이 없습니다.');
        window.location.href = 'index.html';
        return; // Stop executing the script
    }

    const applicationsTable = document.getElementById('applications-table').getElementsByTagName('tbody')[0];
    const applications = JSON.parse(localStorage.getItem('applications')) || [];

    applications.forEach(app => {
        const newRow = applicationsTable.insertRow();
        newRow.insertCell(0).textContent = app.name;
        newRow.insertCell(1).textContent = app.department;
        newRow.insertCell(2).textContent = app.serviceType;
        newRow.insertCell(3).textContent = app.reason;
        newRow.insertCell(4).textContent = new Date(app.date).toLocaleString();
    });

    const logoutButton = document.getElementById('logout-button');
    if(logoutButton) {
        logoutButton.addEventListener('click', () => {
            sessionStorage.removeItem('loggedInUser');
            window.location.href = 'index.html';
        });
    }
});
