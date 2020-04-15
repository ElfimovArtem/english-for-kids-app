const MENU = document.getElementById('MENU');
const MENU_ITEM = MENU.querySelectorAll('.header-item-link');
const CHECKBOX = document.getElementById('CHECKBOX');
const CARDS = document.querySelectorAll('.main-card');
// const MENU_CHECKBOX = document.getElementById('MENU_CHECKBOX');

const Categories = ['Action (set A)', 'Action (set B)', 'Action (set C)',
    'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];




MENU.addEventListener('click', (event) => {
    MENU_ITEM.forEach(el => {
        if (event.target['classList'].value === 'header-item-link') el.classList.remove('active');
    });
    if (event.target['classList'].value === 'header-item-link') event.target['classList'].add('active');
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

// MENU_CHECKBOX.addEventListener('click', () => {
//     if(MENU_CHECKBOX.checked) {
//         document.addEventListener('click', (ev) => {
//             if (ev.target === MENU) {
//                 console.log('popal');
//             } else {
//                 console.log('mimo');
//             }
//         })
//     }
// });

