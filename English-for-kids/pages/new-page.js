import { Cards } from '../src/assets/cards';
import { CHECKBOX } from '../script';

const CONTAINER = document.getElementById('CONTAINER');
const RATING = document.createElement('div');
const BUTTON_CONTAINER = document.createElement('div');
export const START_GAME_BUTTON = document.createElement('button');
RATING.classList.add('rating');
START_GAME_BUTTON.classList.add('start-game-button');
START_GAME_BUTTON.innerHTML = 'Start Game';
START_GAME_BUTTON.onclick = gameButtonIsClicked;
BUTTON_CONTAINER.classList.add('button-container');
BUTTON_CONTAINER.append(START_GAME_BUTTON);
const RATE_BANNER = document.createElement('div');
RATE_BANNER.classList.add('rate-banner');
const WIN_BANNER = document.createElement('div');
WIN_BANNER.classList.add('win-banner');
const FAILURE_BANNER = document.createElement('div');
FAILURE_BANNER.classList.add('failure-banner');
const CORRECT_AUDIO = document.createElement('audio');
const CORRECT_AUDIO_SRC = document.createElement('source');
CORRECT_AUDIO_SRC.setAttribute('src', './src/assets/audio/correct.mp3');
CORRECT_AUDIO.append(CORRECT_AUDIO_SRC);
const ERROR_AUDIO = document.createElement('audio');
const ERROR_AUDIO_SRC = document.createElement('source');
ERROR_AUDIO_SRC.setAttribute('src', './src/assets/audio/error.mp3');
ERROR_AUDIO.append(ERROR_AUDIO_SRC);

function gameButtonIsClicked () {
    START_GAME_BUTTON.classList.add('repeat-button');
}

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
        if (START_GAME_BUTTON.classList.contains('repeat-button')) this.classList.add('opacity');
    }
    CONTAINER.append(RATING);

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
            START_GAME_BUTTON.classList.remove('invisibility');
            RATING.classList.remove('invisibility');
            START_GAME_BUTTON.classList.remove('repeat-button');
        } else {
            FRONT.onclick = Pronunciation;
            START_GAME_BUTTON.classList.add('invisibility');
            RATING.classList.add('invisibility');
            START_GAME_BUTTON.classList.remove('repeat-button');
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

    CONTAINER.append(BUTTON_CONTAINER);
    CONTAINER.append(CORRECT_AUDIO);
    CONTAINER.append(ERROR_AUDIO);

    CHECKBOX.addEventListener('click', () => {
        if (!CHECKBOX.checked) {
            document.querySelectorAll('.card').forEach(el => {
                el.children[2].classList.add('invisibility');
                el.children[1].children[0].classList.add('invisibility');
                el.children[1].classList.add('front-size');
                el.children[1].onclick = addOpacity;
                el.parentElement.parentElement.children[0].classList.remove('invisibility');
                el.parentElement.parentElement.children[9].children[0].classList.remove('invisibility');
            });
        } else {
            document.querySelectorAll('.card').forEach(el => {
                el.children[2].classList.remove('invisibility');
                el.children[1].children[0].classList.remove('invisibility');
                el.children[1].classList.remove('front-size');
                el.children[1].onclick = Pronunciation;
                el.children[1].classList.remove('opacity-card');
                el.parentElement.parentElement.children[0].classList.add('invisibility');
                el.parentElement.parentElement.children[9].children[0].classList.add('invisibility');
                el.parentElement.parentElement.children[9].children[0].classList.remove('repeat-button');
            });
            RATING.querySelectorAll('div').forEach(e => e.remove());
        }
    });

    function randomInteger(min, max) {
        let random = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
    }
    function randomPlay () {
        setTimeout(() => audioArr[indexAudio].play(), 700);
    }

    let audioArr = [];

    function newAudioArray () {
        document.querySelectorAll('.card').forEach(card => {
            if (audioArr.length < 8) audioArr.push(card.children[3]);
        });
    }
    newAudioArray();

    let indexAudio = randomInteger(0, audioArr.length - 1);

    START_GAME_BUTTON.addEventListener('click', () => {
        if (audioArr.length > 0) randomPlay();
        if (audioArr.length > 7) Handler();
    });

    function shutdownHandler () {
        CONTAINER.removeEventListener('click', Handler, false);
    }

    function Handler () {
        CONTAINER.addEventListener('click', Handler = (evt) => {
            if (evt.target['classList'].contains('repeat-button')) {
                if (audioArr[indexAudio]) setTimeout(() => audioArr[indexAudio].play(), 200);
            } else {
                if (audioArr[indexAudio] === evt.target['parentElement'].children[3]) {
                    audioArr.splice(indexAudio, 1);
                    CONTAINER.children[10].play();
                    const STAR_TRUE = document.createElement('div');
                    STAR_TRUE.classList.add('star-true');
                    RATING.append(STAR_TRUE);
                    evt.target['classList'].add('opacity-card');
                    indexAudio = randomInteger(0, audioArr.length - 1);
                    if (audioArr.length > 0) {
                        randomPlay(audioArr);
                    } else {
                        let rightAnswers = 0;
                        let wrongAnswers = 0;
                        CONTAINER.children[0].querySelectorAll('div').forEach(elt => {
                            if (!elt.classList.contains('star-false')) {
                                rightAnswers++;
                            } else {
                                wrongAnswers++;
                            }
                        });
                        if (wrongAnswers === 0) {
                            CONTAINER.querySelectorAll('div').forEach(el => {
                                el.remove();
                            });
                            RATE_BANNER.innerHTML = `${rightAnswers} Правильных ответов!! И ни одной ошибки! ПОЗДРАВЛЯЮ!`;
                            CONTAINER.append(RATE_BANNER);
                            CONTAINER.append(WIN_BANNER);
                            setTimeout(() => window.location.reload(), 3000)
                        } else {
                            CONTAINER.querySelectorAll('div').forEach(el => {
                                el.remove();
                            });
                            RATE_BANNER.innerHTML = `Неправильных ответов: ${wrongAnswers}... Попробуйте еще потренироваться`;
                            CONTAINER.append(RATE_BANNER);
                            CONTAINER.append(FAILURE_BANNER);
                            setTimeout(() => window.location.reload(), 3000)
                        }
                    }
                } else {
                    const STAR_FALSE = document.createElement('div');
                    STAR_FALSE.classList.add('star-false');
                    CONTAINER.children[11].play();
                    RATING.append(STAR_FALSE);
                }
            }
        });
        CHECKBOX.addEventListener('click',  (ev) => {
            if (ev.target['classList'].contains('switcher-input')) {
                shutdownHandler();
                audioArr = [];
            }
        });
    }
};
