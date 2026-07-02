const visualStyles = document.createElement('link');
visualStyles.rel = 'stylesheet';
visualStyles.href = './assets/css/visual-v13.css?v=130';
document.head.appendChild(visualStyles);

const mobileStyles = document.createElement('link');
mobileStyles.rel = 'stylesheet';
mobileStyles.href = './assets/css/mobile-v12.css?v=121';
document.head.appendChild(mobileStyles);

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
