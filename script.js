const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const luckyButton = document.getElementById('lucky-button');
const voiceSearchButton = document.getElementById('voice-search-button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        window.location.href = `https://www.google.com/search?q=${searchTerm}`;
    }
});

luckyButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        window.location.href = `https://www.google.com/search?q=${searchTerm}&btnI=I`;
    } else {
        window.location.href = 'https://www.google.com/doodles';
    }
});

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

voiceSearchButton.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
        const searchTerm = event.results[0][0].transcript;
        searchInput.value = searchTerm;
        searchButton.click();
    }
});
