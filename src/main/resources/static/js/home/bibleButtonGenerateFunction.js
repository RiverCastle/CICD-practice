function bibleButtonGenerate(bibleBooks, ButtonsContainer) {
    ButtonsContainer.innerHTML = '';

    for (const book in bibleBooks) {
        const button = document.createElement('button');
        button.innerText = book;

        button.addEventListener('click', () => {
            bibleBook = bibleBooks[book];
            korTitle = book;
            engAbbr = bibleBooks[book].abbreviation;

            url = BACKEND_BASE_URL;
            updateUrl();
            maxChapter = bibleBooks[book].chapters;
            generateChapterButtons(maxChapter);
        });
        ButtonsContainer.appendChild(button);
    }
}