window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navBar');
    const navBtn = document.getElementById('navBtn');
    if (navBar) {
        if (window.scrollY === 0) {
            navBar.style.backgroundColor = 'transparent';
            navBtn.style.color = '#fffffe';
        } else {
            navBar.style.backgroundColor = '#000001';
            navBtn.style.color = '#fffffe';
        }
    }
});

// Toggle #navList visibility on #navBtn click
document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.getElementById('navBtn');
    const navList = document.getElementById('navList');
    const navBar = document.getElementById('navBar');

    if (navBtn && navList && navBar) {
        // Initially hide #navList
        navList.style.display = 'none';
        navList.style.position = 'absolute'; // Ensure it doesn't affect other sections
        navList.style.left = '0'; // Align to the left
        navList.style.width = '100%'; // Make it span 100% of the width
        navList.style.zIndex = '1000'; // Ensure it stays on top

        // Set #navList to appear below #navBar
        const navBarHeight = navBar.offsetHeight;
        navList.style.top = `${navBarHeight}px`;

        navBtn.addEventListener('click', function() {
            if (navList.style.display === 'none') {
                navList.style.display = 'block'; // Show #navList
            } else {
                navList.style.display = 'none'; // Hide #navList
            }
        });
    }
});