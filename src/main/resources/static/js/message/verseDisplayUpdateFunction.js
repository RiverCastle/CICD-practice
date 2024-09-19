//이전 구절, 다음 구절 버튼이 누른 후 새로운 데이터를 표시하는 함수 정의
function updateVerseDisplay(info) {
    fetch(`${BACKEND_BASE_URL}/` + info)
        .then(response => response.json())
        .then(data => {
            const { korTitle, chapter, verse, content } = data[0];
            const titleElement = document.querySelector('.book-title-container');
            const verseMessageElement = document.querySelector('.message');

            titleElement.textContent = `${korTitle} ${chapter}:${verse}`;
            titleElement.textContent = `${korTitle} ${chapter}:${verse}`;

            verseMessageElement.textContent = content;
        })
        .catch(error => console.error(error));
}