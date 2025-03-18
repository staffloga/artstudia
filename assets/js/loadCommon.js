// Загрузка навигации
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
    });

// Загрузка футера
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
    });

// Скрипт для проверки авторизации
if (localStorage.getItem('isAdmin') === 'true') {
    document.addEventListener('DOMContentLoaded', function () {
        const adminLink = document.createElement('a');
        adminLink.href = 'admin/index.html';
        adminLink.className = 'nav-link animate__animated animate__fadeInDown';
        adminLink.textContent = 'Админ-панель';
        document.querySelector('.navbar-nav').appendChild(adminLink);
    });
}