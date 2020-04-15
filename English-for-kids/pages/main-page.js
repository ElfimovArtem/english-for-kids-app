import { Categories } from '../src/assets/cards';

const CONTAINER = document.getElementById('CONTAINER');

export const createMainPage = () => {
    CONTAINER.querySelectorAll('div').forEach(el => el.remove());
    for (let CategoryIndex = 0; CategoryIndex < Categories.length; CategoryIndex++) {
        const NEW_CARD = document.createElement('div');
        const CARD_IMG = document.createElement('img');
        const CARD_DESCRIPTION = document.createElement('span');

        NEW_CARD.classList.add('main-card');
        NEW_CARD.id = Categories[CategoryIndex].id;
        CARD_IMG.setAttribute('src', Categories[CategoryIndex].imgSRC);
        CARD_IMG.setAttribute('alt', Categories[CategoryIndex].title);
        CARD_IMG.setAttribute('id', Categories[CategoryIndex].id);
        CARD_DESCRIPTION.innerHTML = Categories[CategoryIndex].title;
        NEW_CARD.append(CARD_IMG);
        NEW_CARD.append(CARD_DESCRIPTION);
        CONTAINER.append(NEW_CARD);
    }
};