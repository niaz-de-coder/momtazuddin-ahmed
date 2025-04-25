document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        "Professor",
        "Writer",
        "Dramatist",
        "Freedom Fighter",
        "Actor"
    ];
    const el = document.getElementById('professionTop');
    let textIndex = 0;

    function typeText(text, i = 0) {
        if (!el) return;
        if (i === 0) el.textContent = ""; // Clear before typing
        if (i < text.length) {
            el.textContent += text.charAt(i);
            setTimeout(() => typeText(text, i + 1), 60);
        }
    }

    function showNextText() {
        textIndex = (textIndex + 1) % texts.length;
        typeText(texts[textIndex]);
    }

    // Show first text instantly
    if (el) el.textContent = texts[0];

    // Start cycling after 1 second
    setInterval(showNextText, 2000);
});