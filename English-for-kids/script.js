const MENU = document.getElementById('MENU');
const MENU_ITEM = MENU.querySelectorAll('.header-item-link');
const CHECKBOX = document.getElementById('CHECKBOX');
const CARDS = document.querySelectorAll('.main-card');

MENU.addEventListener('click', (event) => {
    MENU_ITEM.forEach(el => el.classList.remove('active'));
    event.target['classList'].add('active');
});

CHECKBOX.addEventListener('click', () => {
    if (CHECKBOX.checked) {
        CARDS.forEach(el => el.classList.remove('play-styles'));
        MENU.classList.remove('on-play-menu');
    } else {
        CARDS.forEach(el => el.classList.add('play-styles'));
        MENU.classList.add('on-play-menu');
    }
});