document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Сохраняем данные в JSON (например, через fetch или localStorage)
    console.log(data); // Замените на сохранение в JSON
});