// Custom Smooth Scrolling
function smoothScrollTo(targetY) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1200;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * ease);

        if (timeElapsed < duration) requestAnimationFrame(animation);
        else document.body.classList.remove('scrolling'); // Bring logo back, asshole
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    document.body.classList.add('scrolling');
    requestAnimationFrame(animation);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';

    const quotes = [
        { text: "Sometimes the questions are complicated and the answers are simple.", author: "Dr. Seuss" },
        { text: "I've learned that people will never forget how you made them feel.", author: "Maya Angelou" },
        // Add more quotes here as needed
    ];

    let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    const quoteContainer = document.querySelector('.quote-container');
    const quoteElement = document.querySelector('.quote');

    function updateQuote() {
        const quote = quotes[currentQuoteIndex];
        quoteElement.textContent = `"${quote.text}" — ${quote.author}`;
        quoteContainer.classList.remove('animate__fadeInDown');
        void quoteContainer.offsetWidth;
        quoteContainer.classList.add('animate__fadeInDown');
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    updateQuote();
    setInterval(updateQuote, 60000);

    document.querySelector('.navbar-brand').addEventListener('click', e => {
        e.preventDefault();
        smoothScrollTo(0);
    });

    document.querySelector('footer a').addEventListener('click', e => {
        e.preventDefault();
        smoothScrollTo(0);
    });

    const projectsSection = document.querySelector('#projects');
    document.getElementById('view-projects-btn').addEventListener('click', e => {
        e.preventDefault();
        const offsetTop = projectsSection.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(offsetTop);
    });

    // Scroll logic - Fix that logo disappearing shit
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 300);
        quoteContainer.style.opacity = opacity;

        const projectsTop = projectsSection.getBoundingClientRect().top;
        const isAtTop = scrollY <= 10; // Check if we're basically at the top
        const isScrolling = Math.abs(scrollY - (projectsTop + window.scrollY)) > 10 && !isAtTop;

        document.body.classList.toggle('scrolling', isScrolling);
        document.body.classList.toggle('scrolled', projectsTop <= 60 && !isAtTop);
    });

    // Project card animations
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});