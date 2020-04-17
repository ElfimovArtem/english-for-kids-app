import { createMainPage } from './pages/main-page';
import { createNewPage } from './pages/new-page';


export const MENU = document.getElementById('MENU');
export const MENU_ITEM = MENU.querySelectorAll('.header-item-link');
export const CHECKBOX = document.getElementById('CHECKBOX');
const MENU_CHECKBOX = document.getElementById('MENU_CHECKBOX');

createMainPage();

MENU.addEventListener('click', (event) => {
    MENU_ITEM.forEach(el => {
        if (event.target['classList'].value === 'header-item-link') el.classList.remove('active');
    });
    if (event.target['classList'].value === 'header-item-link') event.target['classList'].add('active');
    if (event.target['id'] === 'MAIN') {
        createMainPage();
    } else if (event.target['id'] ) {
        createNewPage(event.target['id']);
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
    if (ev.target['id'] !== 'CONTAINER' && ev.target['id']) {
        if (ev.target['classList'].value === 'main-card' || 'main-card-img') {
            createNewPage([ev.target['id']]);
        }
    }
});

CHECKBOX.addEventListener('click', () => {
    if (CHECKBOX.checked) {
        document.querySelectorAll('.main-card').forEach(el => el.classList.remove('play-styles'));
        MENU.classList.remove('on-play-menu');
    } else {
        document.querySelectorAll('.main-card').forEach(el => el.classList.add('play-styles'));
        MENU.classList.add('on-play-menu');
    }
});
