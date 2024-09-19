document.addEventListener("DOMContentLoaded", function() {
    // API에서 데이터 가져오기
    fetch(`${BACKEND_BASE_URL}/log/20`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json(); // JSON 형식으로 파싱
        })
        .then(data => {
            // 테이블의 <tbody> 요소를 가져옴
            const tbody = document.querySelector("tbody");

            // 데이터를 반복하면서 테이블에 행을 추가
            data.forEach(log => {
                // 새로운 행 생성
                const row = document.createElement("tr");

                // engAbbr 열 추가
                const bibleCell = document.createElement("td");
                bibleCell.textContent = log.engAbbr; // 성경
                row.appendChild(bibleCell);

                // verseInfo 열 추가 (장 : 절)
                const verseCell = document.createElement("td");
                verseCell.textContent = log.verseInfo; // 장 : 절
                row.appendChild(verseCell);

                // whenRequested 열 추가 (날짜)
                const dateCell = document.createElement("td");
                dateCell.textContent = new Date(log.whenRequested).toLocaleString(); // 날짜
                row.appendChild(dateCell);

                // processingTime 열 추가 (응답 시간)
                const timeCell = document.createElement("td");
                timeCell.textContent = log.processingTime + " ms"; // 응답 시간
                row.appendChild(timeCell);

                // 행을 <tbody>에 추가
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
});