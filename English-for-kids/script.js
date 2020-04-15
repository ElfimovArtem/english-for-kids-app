import { createMainPage } from './pages/main-page';
import { createNewPage } from './pages/new-page';

const MENU = document.getElementById('MENU');
const MENU_ITEM = MENU.querySelectorAll('.header-item-link');
const CHECKBOX = document.getElementById('CHECKBOX');
const MENU_CHECKBOX = document.getElementById('MENU_CHECKBOX');

createMainPage();

MENU.addEventListener('click', (event) => {
    MENU_ITEM.forEach(el => {
        if (event.target['classList'].value === 'header-item-link') el.classList.remove('active');
    });
    if (event.target['classList'].value === 'header-item-link') event.target['classList'].add('active');
    if (event.target['id'] === 'MAIN') {
        console.log('reload');
        return createMainPage();
    } else {
        return createNewPage(event.target['id']);
    }
});

const CARDS = document.querySelectorAll('.main-card');

CHECKBOX.addEventListener('click', () => {
    if (CHECKBOX.checked) {
        CARDS.forEach(el => el.classList.remove('play-styles'));
        MENU.classList.remove('on-play-menu');
    } else {
        CARDS.forEach(el => el.classList.add('play-styles'));
        MENU.classList.add('on-play-menu');
    }
});

MENU_CHECKBOX.addEventListener('click', () => {
    if (MENU_CHECKBOX.checked === true) {
        document.addEventListener('click', ev => {
            if (ev.target !== MENU && ev.target['classList'].value !== 'header-item' && ev.target !== MENU_CHECKBOX) {
                MENU_CHECKBOX.checked = false;
            }
        });
    }
});

const CONTAINER = document.getElementById('CONTAINER');

CONTAINER.addEventListener('click', ev => {
    if (ev.target['id'] !== 'CONTAINER') {
        createNewPage([ev.target['id']]);
        console.log(ev.target['id']);
    }
});