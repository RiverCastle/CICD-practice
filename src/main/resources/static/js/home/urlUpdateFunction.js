// URL 업데이트
function updateUrl() {
    let url = BACKEND_BASE_URL;
    if (engAbbr) url += `/${engAbbr}`;
    if (selectedChapter) url += `/${selectedChapter}`;
    if (selectedVerse) url += `:${selectedVerse}`;
    urlElement.innerText = url;
}