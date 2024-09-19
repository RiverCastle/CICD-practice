// 이전 구절, 다음 구절 버튼
const leftArrowButton = document.querySelector('.left-arrow');
const rightArrowButton = document.querySelector('.right-arrow');

leftArrowButton.addEventListener('click', () => {
    // 이전 성경 구절
    const currentVerse = parseInt(verse);
    if (currentVerse > 1) {
        verse = verse - 1;
        updateVerseDisplay(`${engAbbr}/${chapter}:${verse}`);
    }
});

rightArrowButton.addEventListener('click', () => {
    // 다음 성경 구절
    const currentVerse = parseInt(verse);
    if (currentVerse < maxVerse) {
        verse = verse + 1;
        updateVerseDisplay(`${engAbbr}/${chapter}:${verse}`);
    }
});