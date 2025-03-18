document.getElementById('newsForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const date = document.getElementById('date').value;

    const newNews = {
        title: title,
        content: content,
        date: date
    };

    // Загрузите существующие новости
    fetch('../data/news.json')
        .then(response => response.json())
        .then(data => {
            data.push(newNews);
            // Сохраните обновленный список новостей (например, через localStorage или fetch)
            console.log(data); // Замените на сохранение в JSON
        })
        .catch(error => console.error('Ошибка загрузки новостей:', error));
});