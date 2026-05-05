document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.querySelector('.btn-explore');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            window.location.href = 'cars.html';
        });
    }

    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your booking request has been sent successfully.');
            bookingForm.reset();
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! We will contact you soon.');
            contactForm.reset();
        });
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#e63946';
            link.style.borderBottom = '2px solid #e63946';
        }
    });
});