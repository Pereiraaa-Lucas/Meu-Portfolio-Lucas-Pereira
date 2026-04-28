// 1. Seleção dos elementos
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

// 2. Lógica do Menu Mobile (Abre e Fecha)
menu.addEventListener('click', () => {
    // Alterna a animação do hambúrguer
    menu.classList.toggle('toggle');
    // Alterna a exibição do menu
    navLinks.classList.toggle('nav-active');
});

// 3. Fechar menu ao clicar em um link (Melhora a experiência do usuário)
navLinksLi.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            menu.classList.remove('toggle');
        }
    });
});

// 4. Scroll Suave (Mantido do seu código original)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
