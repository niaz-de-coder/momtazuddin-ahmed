document.addEventListener('DOMContentLoaded', function () {
    const wwceH = document.getElementById('wwceH');
    const wwceP = document.getElementById('wwceP');
    const wwciCon = document.getElementById('wwciCon');

    // Example data, replace with your real data
    const works = [
        {
            title: "Book One",
            desc: "Description for Book One. Lorem ipsum dolor sit amet.",
            img: "asset/gallery/img1.png"
        },
        {
            title: "Book Two",
            desc: "Description for Book Two. Consectetur adipisicing elit.",
            img: "asset/gallery/img2.png"
        },
        {
            title: "Book Three",
            desc: "Description for Book Three. Error delectus, esse molestias.",
            img: "asset/gallery/img3.png"
        }
    ];

    let idx = 0;
    let isFirst = true;

    // Add transition CSS if not present
    const style = document.createElement('style');
    style.innerHTML = `
    .slide-left {
        transition: transform 0.5s, opacity 0.5s;
        transform: translateX(-100%);
        opacity: 0;
    }
    .slide-in {
        transition: transform 0.5s, opacity 0.5s;
        transform: translateX(0);
        opacity: 1;
    }
    `;
    document.head.appendChild(style);

    function updateContent(index) {
        // Instantly set content for first time
        wwceH.textContent = works[index].title;
        wwceP.textContent = works[index].desc;
        wwciCon.src = works[index].img;
        wwceH.classList.add('slide-in');
        wwceP.classList.add('slide-in');
        wwciCon.classList.add('slide-in');
    }

    function slideLeftAndChange(nextIdx) {
        // Add slide-left class to trigger transition
        wwceH.classList.remove('slide-in');
        wwceP.classList.remove('slide-in');
        wwciCon.classList.remove('slide-in');
        wwceH.classList.add('slide-left');
        wwceP.classList.add('slide-left');
        wwciCon.classList.add('slide-left');

        setTimeout(() => {
            // Change content after transition out
            wwceH.classList.remove('slide-left');
            wwceP.classList.remove('slide-left');
            wwciCon.classList.remove('slide-left');
            wwceH.textContent = works[nextIdx].title;
            wwceP.textContent = works[nextIdx].desc;
            wwciCon.src = works[nextIdx].img;
            // Slide in
            wwceH.classList.add('slide-in');
            wwceP.classList.add('slide-in');
            wwciCon.classList.add('slide-in');
        }, 500);
    }

    function loop() {
        setTimeout(() => {
            let nextIdx = (idx + 1) % works.length;
            slideLeftAndChange(nextIdx);
            idx = nextIdx;
            loop();
        }, 3000);
    }

    // Initial content (no transition)
    updateContent(idx);
    loop();
});