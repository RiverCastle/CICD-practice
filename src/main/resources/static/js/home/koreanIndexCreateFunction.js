// 자음 배열 생성
const consonantsArray = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 함수: 자모에 해당하는 div 요소를 생성하고 추가하는 함수
function createConsonantDivs(parentDiv) {
    parentDiv.innerHTML = '';
    consonantsArray.forEach(consonant => {
        // 새로운 div 요소 생성
        const consonantDiv = document.createElement('div');
        consonantDiv.className = `${consonant}bible index-div`; // 예: class="ㄱ 성경"

        // 새로운 span 요소 생성
        const para = document.createElement('p');
        para.textContent = consonant;

        // span을 div에 추가
        consonantDiv.appendChild(para);

        // 생성된 div를 부모 div에 추가
        parentDiv.appendChild(consonantDiv);
    });
}
