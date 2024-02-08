document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname; // Get only the path part of the URL
    const menuButtons = document.querySelectorAll('.nav-menu a');

    menuButtons.forEach(function(button) {
        const buttonPath = new URL(button.href).pathname; // Extract path from button's href

        if (currentLocation === buttonPath) {
            button.childNodes[1].classList.add('active')
        }
    });
});