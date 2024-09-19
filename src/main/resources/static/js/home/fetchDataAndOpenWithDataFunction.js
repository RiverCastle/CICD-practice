async function fetchAndOpenData() {
  try {
    const response = await fetch(urlElement.innerText);
    const data = await response.json();
    data[0].maxVerse = maxVerse;
    openNewWindow(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}