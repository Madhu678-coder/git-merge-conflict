document.getElementById('toggleButton').addEventListener('click', function() {
    const paragraph = document.querySelector('main section p');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        this.textContent = 'Hide Paragraph';
    } else {
        paragraph.style.display = 'none';
        this.textContent = 'Show Paragraph';
    }
});
