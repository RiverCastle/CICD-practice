// 한글 사전 순 인덱스로 정렬
document.getElementById('korean-sort').addEventListener('click', function() {
    //oldTestamentsButtonsContainer, newTestamentsButtonsContainer에 ㄱㄴㄷ 구역 생성
    createConsonantDivs(oldTestamentsButtonsContainer);
    createConsonantDivs(newTestamentsButtonsContainer);

    // 구약 성경 버튼 생성 기본 인덱스
    generateBibleButtonInKoreanIndex(sortedOldTestaments, oldTestamentsButtonsContainer)
    // 신약 성경 버튼 생성 기본 인덱스
    generateBibleButtonInKoreanIndex(sortedNewTestaments, newTestamentsButtonsContainer)
});