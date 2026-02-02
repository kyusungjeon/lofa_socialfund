document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');
    const showFormButton = document.getElementById('show-form-button');
    const applicationFormContainer = document.getElementById('application-form-container');

    // Mock users
    const users = {
        user: '1234',
        admin: 'admin'
    };

    // Check login state on page load
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showMainContent(loggedInUser);
    }

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (users[username] && users[username] === password) {
            sessionStorage.setItem('loggedInUser', username);
            showMainContent(username);
        } else {
            alert('잘못된 사용자명 또는 비밀번호입니다.');
        }
    });

    // Logout button click
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('loggedInUser');
        hideMainContent();
    });

    function showMainContent(username) {
        loginContainer.style.display = 'none';
        mainContent.style.display = 'block';
        if(username === 'admin') {
            window.location.href = 'admin.html';
        }
    }

    function hideMainContent() {
        loginContainer.style.display = 'block';
        mainContent.style.display = 'none';
        loginForm.reset();
    }
    
    if (showFormButton && applicationFormContainer) {
        showFormButton.addEventListener('click', () => {
            applicationFormContainer.style.display = 'block';
            showFormButton.style.display = 'none';
        });
    }

    document.getElementById('application-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const application = {
            name: document.getElementById('name').value,
            department: document.getElementById('department').value,
            serviceType: document.getElementById('service-type').value,
            reason: document.getElementById('reason').value,
            date: new Date().toISOString()
        };

        let applications = JSON.parse(localStorage.getItem('applications')) || [];
        applications.push(application);
        localStorage.setItem('applications', JSON.stringify(applications));

        alert('신청이 완료되었습니다.');
        this.reset();
        applicationFormContainer.style.display = 'none';
        showFormButton.style.display = 'block';
    });
});