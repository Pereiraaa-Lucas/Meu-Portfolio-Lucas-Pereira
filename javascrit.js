const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});
