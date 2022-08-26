import './css/style.css';
import azathoth from './assets/Ancients/Azathoth.png';
import cthulhu from './assets/Ancients/Cthulthu.png';
import iogSothoth from './assets/Ancients/IogSothoth.png';
import shubNiggurath from './assets/Ancients/ShubNiggurath.png';
import bg from './assets/home.png';
import mythic from './assets/mythicCardBackground.png'
import greenCardsData from './data/mythicCards/green';
import blueCardsData from './data/mythicCards/blue';
import brownCardsData from './data/mythicCards/brown';
import { shuffle } from './suffleFunc.js';
import ancientsData from './data/ancients';

//set backgroungs

const backgroundImg = () => {
  const body = document.body;
  body.style.background = `url(${bg}) no-repeat center center`;
}

backgroundImg();

const azathothCardBg = () => {
  const azCard = document.querySelector('.azathoth');
  azCard.style.background = `url(${azathoth}) no-repeat 50%`;
  azCard.style.backgroundSize = "200px 260px";
}

azathothCardBg();

const cthulhuCardBg = () => {
  const ctCard = document.querySelector('.cthulhu');
  ctCard.style.background = `url(${cthulhu}) no-repeat 50%`;
  ctCard.style.backgroundSize = "200px 260px";
}

cthulhuCardBg();

const iogSothothCardBg = () => {
  const iogCard = document.querySelector('.iogSothoth');
  iogCard.style.background = `url(${iogSothoth}) no-repeat 50%`;
  iogCard.style.backgroundSize = "200px 260px";
}

iogSothothCardBg();

const shubNiggurathCardBg = () => {
  const shuCard = document.querySelector('.shubNiggurath');
  shuCard.style.background = `url(${shubNiggurath}) no-repeat 50%`;
  shuCard.style.backgroundSize = "200px 260px";
}

shubNiggurathCardBg();

const mythicCard = () => {
  const myCard = document.querySelector('.mythic');
  myCard.style.background = `url(${mythic}) no-repeat 50%`;
  myCard.style.backgroundSize = "230px 310px";
}

mythicCard();

//set active state of buttons

document.addEventListener('click', e => {
  e.target.closest('.antient-card')?.classList.toggle('clickStateCard');
});

document.addEventListener('click', e => {
  e.target.closest('.difficulty-card')?.classList.toggle('clickState');
});


//set random card function

const cardsArr = [];

cardsArr.push(greenCardsData);
cardsArr.push(brownCardsData);
cardsArr.push(blueCardsData);

const fullDeck = cardsArr.flat();

const finalDeck = shuffle(fullDeck);
console.log(finalDeck);

//set counter function

const cards = document.querySelectorAll('.antient-card');
const difficultys = document.querySelectorAll('.difficulty-card');
const selectedCard = [];
const selectedDifficulty = [];

cards.forEach((c,i) => c.onclick = () => {
  selectedCard.push(i);
});

difficultys.forEach((d,i) => d.onclick = () => {
  selectedDifficulty.push(i);
});

if (selectedCard.pop() == 0) {

}



