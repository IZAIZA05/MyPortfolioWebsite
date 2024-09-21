// Custom JavaScript if needed
// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆';
backToTopButton.classList.add('btn', 'btn-primary', 'back-to-top');
document.body.appendChild(backToTopButton);

window.onscroll = () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});