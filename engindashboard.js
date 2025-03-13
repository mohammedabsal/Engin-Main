document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Toggle mobile menu visibility and icon change when menu button is clicked
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');  // Toggle the active class for the button to change the icon
    });

    // Close mobile menu if a link is clicked (optional)
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');  // Reset icon back to hamburger when closing the menu
        });
    });
});
