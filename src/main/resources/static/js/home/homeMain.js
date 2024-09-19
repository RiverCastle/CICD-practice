const bibleButtonsContainer = document.getElementById('bible-buttons');
const oldTestamentsButtonsContainer = document.getElementById('old-testament');
const newTestamentsButtonsContainer = document.getElementById('new-testament');

const chapterButtonsContainer = document.getElementById('chapter-buttons');
const verseButtonsContainer = document.getElementById('verse-buttons');
const urlElement = document.getElementById('url');

var bibleBook;
var korTitle;
var engAbbr = '';
var selectedChapter = 0;
var selectedVerse = 0;
var maxChapter;
var maxVerse;

// 구약 성경 버튼 생성 기본 인덱스
bibleButtonGenerate(oldTestaments, oldTestamentsButtonsContainer)
// 신약 성경 버튼 생성 기본 인덱스
bibleButtonGenerate(newTestaments, newTestamentsButtonsContainer)

// A 페이지
const goButton = document.getElementById('go-button');
goButton.addEventListener('click', fetchAndOpenData);