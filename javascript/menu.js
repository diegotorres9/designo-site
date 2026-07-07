const menuIcon = document.querySelector("#mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('menuIsOpen');
    overlay.classList.toggle('overlay-show');
    // console.log('event worked, class toggle did not')
})