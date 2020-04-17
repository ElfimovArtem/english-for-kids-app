import { Cards } from '../src/assets/cards';
import { CHECKBOX } from '../script';

const CONTAINER = document.getElementById('CONTAINER');

export const createNewPage = (id) => {
    CONTAINER.querySelectorAll('div').forEach(el => {
        if (el['classList'].value === 'main-card' || 'card-container') {
            el.remove();
        }
    });

    function LeaveMouse () {
        this.classList.remove('translate');
    }

    function Rotate () {
        if (!this.parentElement.classList.contains('translate')){
            this.parentElement.classList.add('translate');
        }
    }

    function Pronunciation () {
        this.parentElement.children[3].play();
    }

    function addOpacity () {
        this.classList.add('opacity');
    }

    Cards[id].forEach(el => {
        const CARD_CONTAINER = document.createElement('div');
        CARD_CONTAINER.classList.add('card-container');
        const CARD = document.createElement('div');
        CARD.classList.add('card');
        const FRONT = document.createElement('div');
        FRONT.classList.add('front');
        FRONT.setAttribute('style', `background-image: url("${el.image}");`);
        const BACK = document.createElement('div');
        BACK.classList.add('back');
        BACK.setAttribute('style', `background-image: url("${el.image}");`);
        const ROTATE = document.createElement('div');
        ROTATE.classList.add('rotate');
        ROTATE.onclick = Rotate;
        CARD.onmouseleave = LeaveMouse;
        const CARD_TITLE_FRONT = document.createElement('div');
        CARD_TITLE_FRONT.classList.add('card-title');
        CARD_TITLE_FRONT.innerHTML = el['word'];
        const CARD_TITLE_BACK = document.createElement('div');
        CARD_TITLE_BACK.classList.add('card-title');
        CARD_TITLE_BACK.innerHTML = el['translation'];
        const AUDIO = document.createElement('audio');
        const AUDIO_SRC = document.createElement('source');
        AUDIO_SRC.setAttribute('src', `${el.audioSrc}`);
        if (!CHECKBOX.checked) {
            ROTATE.classList.add('invisibility');
            CARD_TITLE_FRONT.classList.add('invisibility');
            FRONT.classList.add('front-size');
            FRONT.onclick = addOpacity;
        } else {
            FRONT.onclick = Pronunciation;
        }
        AUDIO.append(AUDIO_SRC);
        BACK.append(CARD_TITLE_BACK);
        FRONT.append(CARD_TITLE_FRONT);
        CARD.append(BACK);
        CARD.append(FRONT);
        CARD.append(ROTATE);
        CARD.append(AUDIO);
        CARD_CONTAINER.append(CARD);
        CONTAINER.append(CARD_CONTAINER);
    });

    CHECKBOX.addEventListener('click', () => {
        if (!CHECKBOX.checked) {
            document.querySelectorAll('.card').forEach(el => {
                el.children[2].classList.add('invisibility');
                el.children[1].children[0].classList.add('invisibility');
                el.children[1].classList.add('front-size');
                el.children[1].onclick = addOpacity;
            });
        } else {
            document.querySelectorAll('.card').forEach(el => {
                el.children[2].classList.remove('invisibility');
                el.children[1].children[0].classList.remove('invisibility');
                el.children[1].classList.remove('front-size');
                el.children[1].onclick = Pronunciation;
                el.children[1].classList.remove('opacity');
            });
        }
    });
};
