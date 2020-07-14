const menu = document.querySelector('#toggle');
const menuItems = document.querySelector('#overlay');
const menuContainer = document.querySelector('.menu-container');

function toggleMenu(e) {
    menuItems.classList.toggle('open');
    menuContainer.classList.toggle('full-menu');
    e.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);