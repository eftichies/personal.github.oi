// Simple gallery and form validation
function showImage(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = src;
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
// Contact form validation
function validateForm() {
    const name = document.forms['contactForm']['name'].value;
    const email = document.forms['contactForm']['email'].value;
    const message = document.forms['contactForm']['message'].value;
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
};

// Navbar dropdown toggle
function toggleNavbar() {
    var navbar = document.getElementById('navbar-list');
    navbar.classList.toggle('show');
}