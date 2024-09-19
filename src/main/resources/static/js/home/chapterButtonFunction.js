// 장 버튼 생성
function generateChapterButtons(maxChapters) {
    chapterButtonsContainer.innerHTML = '';
    verseButtonsContainer.innerHTML = '';
    selectedChapter = 0;
    selectedVerse = 0;
    for (let i = 1; i <= maxChapters; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            selectedChapter = i;
            updateUrl();
            maxVerse = bibleBook.verses[selectedChapter - 1];
            generateVerseButtons(maxVerse);
        });
        chapterButtonsContainer.appendChild(button);
    }
}