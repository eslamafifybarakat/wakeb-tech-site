document.addEventListener("DOMContentLoaded", function () {
    scrollTop();
    var scrollToTopBtn = document.getElementById("scroll-top");
    // Show Loader
    var loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add('d-none');
    }, 2000);

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.remove('d-none');
        } else {
            scrollToTopBtn.classList.add('d-none');
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    function scrollTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    // When Scroll add class to navbar
    function handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);

    // footer typing description
    var currentURL = window.location.href;
    const text = currentURL.includes('-ar') ? 'الذكاء الاصطناعي في مكان واحد' : "Artificial Intelligence At One Stop";
    let index = 0;
    let isDeleting = false;
    const intervalTime = 100; // Adjust interval time here (milliseconds)

    function typeWriter() {
        const typewriterElement = document.getElementById("footer-text");
        const currentText = typewriterElement.innerHTML;

        if (!isDeleting && index <= text.length) {
            typewriterElement.innerHTML = text.substring(0, index);
            index++;
        } else if (isDeleting && index >= 0) {
            typewriterElement.innerHTML = null;
            index = 0;
            // typewriterElement.innerHTML = text.substring(0, index);
            // index--;
        }

        if (index === text.length + 1) {
            isDeleting = true;
        } else if (index === 0) {
            isDeleting = false;
        }
    }

    // Start typing when the page loads
    setInterval(typeWriter, intervalTime);
})