function generateBibleButtonInKoreanIndex(bibleBooks, ButtonsContainer) {

    for (const book in bibleBooks) {
        const button = document.createElement('button');
        button.innerText = book;
        var koreanIndex = bibleBooks[book].koreanIndex;
        button.addEventListener('click', () => {
            bibleBook = bibleBooks[book];
            korTitle = book;
            engAbbr = bibleBooks[book].abbreviation;
            updateUrl();
            maxChapter = bibleBooks[book].chapters;
            generateChapterButtons(maxChapter);
        });
        const span = ButtonsContainer.getElementsByClassName(koreanIndex + 'bible')[0];
        span.appendChild(button);
    }
}