document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navPanel = document.getElementById('primaryNav');
    const navLinks = navPanel ? navPanel.querySelectorAll('a') : [];

    if (menuToggle && navPanel) {
        // Hamburger menü butonuna tıklanınca menüyü aç/kapa
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navPanel.classList.toggle('is-open');
            document.body.classList.toggle('menu-open', !isExpanded);
        });

        // Menü bağlantılarına tıklandığında menüyü kapat
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navPanel.classList.contains('is-open')) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    navPanel.classList.remove('is-open');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }
});
