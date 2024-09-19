// 절 버튼 생성
function generateVerseButtons(maxVerses) {
    verseButtonsContainer.innerHTML = '';
    selectedVerse = 0;
    for (let i = 1; i <= maxVerses; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            selectedVerse = i;
            updateUrl();
        });
        verseButtonsContainer.appendChild(button);
    }
}