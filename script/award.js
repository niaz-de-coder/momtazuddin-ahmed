document.addEventListener('DOMContentLoaded', function () {
    const awardPhoto = document.getElementById('awardPhoto');
    const awardName = document.getElementById('awardName');

    // Add your award images and names here
    const awards = [
        { src: "asset/gallery/img4.png", name: "Award1" },
        { src: "asset/gallery/img1.png", name: "Award2" },
        { src: "asset/gallery/img2.png", name: "Award3" },
        { src: "asset/gallery/img3.png", name: "Award4" }
    ];

    let idx = 0;

    // Show first award instantly
    if (awardPhoto && awardName) {
        awardPhoto.src = awards[0].src;
        awardName.textContent = awards[0].name;
    }

    setInterval(() => {
        idx = (idx + 1) % awards.length;
        if (awardPhoto && awardName) {
            awardPhoto.src = awards[idx].src;
            awardName.textContent = awards[idx].name;
        }
    }, 2000);
});