const menuIcon = document.querySelector("#mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const hamburgerIcon = document.querySelector(".open-menu-icon");
const closeIcon = document.querySelector(".close-menu-icon");


menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('menuIsOpen');
    overlay.classList.toggle('overlay-show');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    // console.log('event worked, class toggle did not')
})