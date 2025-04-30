document.addEventListener('DOMContentLoaded', function () {
    const personalImg = document.getElementById('personalImg');
    const personalName = document.getElementById('personalName');
    const parentsBtn = document.getElementById('parentsBtn');
    const spouseBtn = document.getElementById('spouseBtn');
    const childrenBtn = document.getElementById('childrenBtn');
    const grandChildrenBtn = document.getElementById('grandChildrenBtn');

    // Data for each button
    const steps = [
        {
            btn: parentsBtn,
            sequence: [
                { src: "asset/main-gal/img47.jpeg", name: "father" },
                { src: "asset/main-gal/img48.jpeg", name: "mother" }
            ]
        },
        {
            btn: spouseBtn,
            sequence: [
                { src: "asset/main-gal/img56.jpeg", name: "wife" }
            ]
        },
        {
            btn: childrenBtn,
            sequence: [
                { src: "asset/main-gal/img1.jpeg", name: "child1" },
                { src: "asset/main-gal/img2.jpeg", name: "child2" },
                { src: "asset/main-gal/img3.jpeg", name: "child3" },
                { src: "asset/main-gal/img1.jpeg", name: "child4" }
            ]
        },
        {
            btn: grandChildrenBtn,
            sequence: [
                { src: "asset/main-gal/img1.jpeg", name: "grandChild1" },
                { src: "asset/main-gal/img2.jpeg", name: "grandChild2" },
                { src: "asset/main-gal/img3.jpeg", name: "grandChild3" },
                { src: "asset/main-gal/img1.jpeg", name: "grandChild4" },
                { src: "asset/main-gal/img2.jpeg", name: "grandChild5" },
                { src: "asset/main-gal/img3.jpeg", name: "grandChild6" },
                { src: "asset/main-gal/img1.jpeg", name: "grandChild7" },
                { src: "asset/main-gal/img2.jpeg", name: "grandChild8" },
                { src: "asset/main-gal/img3.jpeg", name: "grandChild9" }
            ]
        }
    ];

    let currentStep = 0;
    let currentSeq = 0;
    let loopTimeout = null;
    let isManual = false;

    function setActiveBtn(idx) {
        steps.forEach((step, i) => {
            if (i === idx) {
                step.btn.classList.add('active');
            } else {
                step.btn.classList.remove('active');
            }
        });
    }

    function showCurrent() {
        const step = steps[currentStep];
        const seq = step.sequence[currentSeq];
        if (personalImg) personalImg.src = seq.src;
        if (personalName) personalName.textContent = seq.name;
        setActiveBtn(currentStep);
    }

    function next() {
        const step = steps[currentStep];
        currentSeq++;
        if (currentSeq >= step.sequence.length) {
            // Move to next step
            currentStep = (currentStep + 1) % steps.length;
            currentSeq = 0;
        }
        showCurrent();
        loopTimeout = setTimeout(next, 1500);
    }

    function startLoop(fromStep = 0) {
        clearTimeout(loopTimeout);
        isManual = false;
        currentStep = fromStep;
        currentSeq = 0;
        showCurrent();
        loopTimeout = setTimeout(next, 1500);
    }

    // Button click handlers
    steps.forEach((step, idx) => {
        step.btn.addEventListener('click', function () {
            clearTimeout(loopTimeout);
            isManual = true;
            currentStep = idx;
            currentSeq = 0;
            showCurrent();
            loopTimeout = setTimeout(function loop() {
                if (!isManual) return;
                const s = steps[currentStep];
                currentSeq++;
                if (currentSeq >= s.sequence.length) {
                    currentSeq = 0;
                }
                showCurrent();
                loopTimeout = setTimeout(loop, 1500);
            }, 1500);
        });
    });

    // When any button is clicked, resume loop from that button
    function resumeLoopFrom(idx) {
        isManual = true;
        currentStep = idx;
        currentSeq = 0;
        showCurrent();
        clearTimeout(loopTimeout);
        loopTimeout = setTimeout(function loop() {
            if (!isManual) return;
            const s = steps[currentStep];
            currentSeq++;
            if (currentSeq >= s.sequence.length) {
                currentSeq = 0;
            }
            showCurrent();
            loopTimeout = setTimeout(loop, 1500);
        }, 1500);
    }

    // Start the loop initially
    startLoop(0);
});