const burger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar__items');
const navbarItems = document.querySelectorAll('.navbar__item');
const logo = document.querySelector('.navbar__logo');
const moreBtn = document.querySelector('.projects__btn-more');
const modal = document.querySelector('.projects__modal');

// clicking the burger opens the drawer menu
burger.addEventListener('click', toggleNav);

// Clicking a navlink closes the modal
if (screen.width <= 768) {
  console.log(navbarItems);
  navbarItems.forEach((item) => item.addEventListener('click', toggleNav));
}
// More btn in projects section opens a modal with all projects
moreBtn.addEventListener('click', toggleModal);
modal.addEventListener('click', toggleModal);

function toggleModal() {
  if (modal.style.display === '') {
    modal.style.display = 'block';
  } else {
    modal.style.display = '';
  }
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
