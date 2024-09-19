// 기본 성경 인덱스로 정렬
document.getElementById('default-sort').addEventListener('click', function() {
    // 구약 성경 버튼 생성 기본 인덱스
    bibleButtonGenerate(oldTestaments, oldTestamentsButtonsContainer)
    // 신약 성경 버튼 생성 기본 인덱스
    bibleButtonGenerate(newTestaments, newTestamentsButtonsContainer)
});
