const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.mobile-nav a');
const body = document.body;

// Ouvrir/fermer le menu
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  body.classList.toggle('menu-ouvert'); // Si tu utilises cette classe pour assombrir le fond
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    body.classList.remove('menu-ouvert');
  });
});
