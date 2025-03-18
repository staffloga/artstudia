document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/news.json')
        .then(response => response.json())
        .then(data => {
            const newsList = document.getElementById('news-list');
            data.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'col-md-6 mb-4';
                newsItem.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.content}</p>
                            <small class="text-muted">${news.date}</small>
                        </div>
                    </div>
                `;
                newsList.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Ошибка загрузки новостей:', error));
});