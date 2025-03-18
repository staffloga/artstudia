document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Простая проверка логина и пароля
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isAdmin', 'true');
        window.location.href = '../../index.html';
    } else {
        document.getElementById('error').textContent = 'Неверный логин или пароль';
    }
});