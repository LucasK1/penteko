const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-items');
const navItems = document.querySelectorAll('.nav-item');

burger.addEventListener('click', toggleNav);
navItems.forEach((item) => item.addEventListener('click', toggleNav));

function toggleNav() {
  nav.classList.toggle('nav-active');
  animateLinks();
  animateBurger();
}

function animateLinks() {
  navItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = '';
    } else {
      item.style.animation = `navItemFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
}

function animateBurger() {
  burger.classList.toggle('toggle');
}
