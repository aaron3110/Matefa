document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('section, img, h1, h2, h3, p, div, .overlay, .header-text, header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                if (entry.target.tagName === 'IMG' || entry.target.tagName === 'DIV' || entry.target.tagName === 'SECTION' || entry.target.classList.contains('overlay') || entry.target.classList.contains('header-text') || entry.target.tagName === 'HEADER') {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.add('slide-up');
                }
                if (entry.target.tagName === 'HEADER') {
                    entry.target.classList.add('slide-down');
                }
            } else {
                entry.target.classList.remove('animated', 'fade-in', 'slide-up', 'slide-down');
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const groups = document.querySelectorAll('.content-box > .group');
    let currentIndex = 0;

    function showNextGroup() {
        groups.forEach(group => group.classList.remove('active'));
        groups[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % groups.length;
    }

    showNextGroup();
    setInterval(showNextGroup, 7000);
});

document.addEventListener("DOMContentLoaded", function() {
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const sideMenu = document.querySelector(".side-menu");

    mobileNavToggle.addEventListener("click", function() {
        sideMenu.classList.toggle("open");
    });

    document.addEventListener("click", function(event) {
        if (!sideMenu.contains(event.target) && !mobileNavToggle.contains(event.target)) {
            sideMenu.classList.remove("open");
        }
    });
});