var targetObject;
var korTitle;
var chapter;
var verse;
var content;
var engAbbr;
var maxVerse;

window.addEventListener('message', (event) => {
  //데이터 할당
  targetObject = event.data[0];
  korTitle = targetObject.korTitle;
  chapter = targetObject.chapter;
  verse = targetObject.verse;
  content = targetObject.content;
  engAbbr = targetObject.engAbbr;
  maxVerse = targetObject.maxVerse;

  //데이터 표시 함수 호출
  updateVerseDisplay(korTitle, chapter, verse, content);

  //데이터 표시 함수 정의
  function updateVerseDisplay(korTitle, chapter, verse, content) {
    const titleElement = document.querySelector('.book-title-container');
    const verseMessageElement = document.querySelector('.message');

    titleElement.textContent = korTitle+chapter+':'+verse;
    verseMessageElement.textContent = content;
    }
});