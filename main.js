const burger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar__items');
const navbarItems = document.querySelectorAll('.navbar__item');
const logo = document.querySelector('.navbar__logo');

burger.addEventListener('click', toggleNav);
if (screen.width >= '768px') {
  navbarItems.forEach((item) => item.addEventListener('click', toggleNav));
}

function toggleNav() {
  navbar.classList.toggle('navbar--active');
  animateLinks();
  animateBurger();
}

function animateLinks() {
  navbarItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = '';
    } else {
      item.style.animation = `navbarItemFade 0.2s ease forwards ${
        index / 7 + 0.2
      }s`;
    }
  });
}

function animateBurger() {
  burger.classList.toggle('is-active');
}
