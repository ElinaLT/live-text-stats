const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const clearButton = document.getElementById('clear-button');

function updateCounts() {
    const text = textInput.value;

    charCount.textContent = text.length;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = text.trim() ? words.length : 0;
}

textInput.addEventListener('input', updateCounts);
clearButton.addEventListener('click', () => {
    textInput.value = '';
    updateCounts();
})

updateCounts();