document.addEventListener('DOMContentLoaded', function () {
    const memoryUserImg = document.getElementById('memoryUserImg');
    const memoryUserSay = document.getElementById('memoryUserSay');
    const memoryUserTitle = document.getElementById('memoryUserTitle');

    // Array of memory users
    const memories = [
        {
            img: "asset/main-gal/img1.jpeg",
            say: '"User Say 1"',
            title: "user1"
        },
        {
            img: "asset/main-gal/img2.jpeg",
            say: '"User Say 2"',
            title: "user2"
        },
        {
            img: "asset/main-gal/img3.jpeg",
            say: '"User Say 3"',
            title: "user3"
        }
        // Add more objects as needed
    ];

    let idx = 0;

    // Show first memory instantly
    if (memoryUserImg && memoryUserSay && memoryUserTitle) {
        memoryUserImg.src = memories[0].img;
        memoryUserSay.textContent = memories[0].say;
        memoryUserTitle.textContent = memories[0].title;
    }

    setInterval(() => {
        idx = (idx + 1) % memories.length;
        if (memoryUserImg && memoryUserSay && memoryUserTitle) {
            memoryUserImg.src = memories[idx].img;
            memoryUserSay.textContent = memories[idx].say;
            memoryUserTitle.textContent = memories[idx].title;
        }
    }, 5000);
});