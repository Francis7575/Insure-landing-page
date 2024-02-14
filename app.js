const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuContainer = document.getElementById('menuBackground');
const ul = document.getElementById('ulContainer');
const navPattern = document.querySelector('.nav_pattern')

function toggleMenu() {
    if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
        menuContainer.style.display = 'block';
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none';
        menuContainer.style.backgroundColor = '#2C2830';
        menuContainer.style.width = '100%';
        menuContainer.style.minHeight = '587px';
        ul.style.display = 'block';
        navPattern.style.display = 'block';

    } else {
        menuContainer.style.display = 'none';
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
    }
}

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
})

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
})