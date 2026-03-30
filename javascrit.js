const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});
