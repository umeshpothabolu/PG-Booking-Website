const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Modal functionality
const bookTourButton = document.getElementById('book-tour-button');
const bookingModal = document.getElementById('booking-modal');
const closeModalButton = document.getElementById('close-modal-button');

bookTourButton.addEventListener('click', () => {
    bookingModal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', () => {
    bookingModal.classList.add('hidden');
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        bookingModal.classList.add('hidden');
    }
});
