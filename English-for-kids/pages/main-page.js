import { Categories } from '../src/assets/cards';
import { CHECKBOX, MENU_ITEM } from '../script';

const CONTAINER = document.getElementById('CONTAINER');

function checkId () {
    MENU_ITEM.forEach(el => {
        el.classList.remove('active');
        if (this.id === el.id) el.classList.add('active');
    });
}

export const createMainPage = () => {
    CONTAINER.querySelectorAll('div').forEach(el => el.remove());
    for (let CategoryIndex = 0; CategoryIndex < Categories.length; CategoryIndex++) {
        const NEW_CARD = document.createElement('div');
        const CARD_IMG = document.createElement('img');
        const CARD_DESCRIPTION = document.createElement('span');

        NEW_CARD.classList.add('main-card');
        if (CHECKBOX.checked) {
            NEW_CARD.classList.remove('play-styles');
        } else {
            NEW_CARD.classList.add('play-styles');
        }
        NEW_CARD.id = Categories[CategoryIndex].id;
        NEW_CARD.onclick = checkId;
        CARD_IMG.classList.add('main-card-img');
        CARD_IMG.setAttribute('src', Categories[CategoryIndex].imgSRC);
        CARD_IMG.setAttribute('alt', Categories[CategoryIndex].title);
        CARD_IMG.setAttribute('id', Categories[CategoryIndex].id);
        CARD_DESCRIPTION.innerHTML = Categories[CategoryIndex].title;
        NEW_CARD.append(CARD_IMG);
        NEW_CARD.append(CARD_DESCRIPTION);
        CONTAINER.append(NEW_CARD);
    }
};