window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 0) {
        nav.style.backgroundColor = '#000001';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});