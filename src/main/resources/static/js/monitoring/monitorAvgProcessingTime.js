document.addEventListener("DOMContentLoaded", function() {
    // API 호출하여 평균 응답 시간 가져오기
    fetch(`${BACKEND_BASE_URL}/log/average-processing-time`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json(); // assuming the API returns JSON data
        })
        .then(data => {
            // average-processing-time API가 평균 응답 시간을 반환한다고 가정
            const averageTime = data; // data에서 평균 시간을 가져옴
            document.getElementById("overallAvgTime").innerHTML = averageTime;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            document.getElementById("overallAvgTime").innerHTML = "Error fetching data";
        });
});