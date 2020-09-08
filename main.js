const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-items');
const navItems = document.querySelectorAll('.nav-item');

burger.addEventListener('click', showNav);

function showNav() {
  nav.classList.toggle('nav-active');
  animateLinks();
}

function animateLinks() {
  navItems.forEach((item, index) => {
    item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  });
}
