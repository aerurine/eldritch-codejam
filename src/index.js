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

const body = document.body;
const azCard = document.querySelector('.azathoth');
const ctCard = document.querySelector('.cthulhu');
const iogCard = document.querySelector('.iogSothoth');
const shuCard = document.querySelector('.shubNiggurath');
const myCard = document.querySelector('.mythic');
const veryEasy = document.querySelector('.very-easy');
const easy = document.querySelector('.easy');
const normal = document.querySelector('.normal');
const hard = document.querySelector('.hard');
const veryHard = document.querySelector('.very-hard');
const cards = document.querySelectorAll('.antient-card');
const difficultys = document.querySelectorAll('.difficulty-card');


const backgroundImg = () => {
  body.style.background = `url(${bg}) no-repeat center center`;
  azCard.style.background = `url(${azathoth}) no-repeat 50%`;
  azCard.style.backgroundSize = "200px 260px";
  ctCard.style.background = `url(${cthulhu}) no-repeat 50%`;
  ctCard.style.backgroundSize = "200px 260px";
  iogCard.style.background = `url(${iogSothoth}) no-repeat 50%`;
  iogCard.style.backgroundSize = "200px 260px";
  shuCard.style.background = `url(${shubNiggurath}) no-repeat 50%`;
  shuCard.style.backgroundSize = "200px 260px";
  myCard.style.background = `url(${mythic}) no-repeat 50%`;
  myCard.style.backgroundSize = "230px 310px";
}

backgroundImg();

//set active state of buttons

document.addEventListener('click', e => {
  e.target.closest('.antient-card')?.classList.toggle('clickStateCard');
  e.target.closest('.difficulty-card')?.classList.toggle('clickState');
});

//set picking algorithm 

const cardsArr = [];

cardsArr.push(greenCardsData, brownCardsData, blueCardsData);
let allCards = cardsArr.flat();
let shuffled = shuffle(allCards);
console.log(shuffled);

const greenNormal = shuffled.filter(card => card.difficulty == 'normal' && card.color == 'green');
const greenEasy = shuffled.filter(card => card.difficulty == 'easy' && card.color == 'green');
const greenHard = shuffled.filter(card => card.difficulty == 'hard' && card.color == 'green');
const blueNormal = shuffled.filter(card => card.difficulty == 'normal' && card.color == 'blue');
const blueEasy = shuffled.filter(card => card.difficulty == 'easy' && card.color == 'blue');
const blueHard = shuffled.filter(card => card.difficulty == 'hard' && card.color == 'blue');
const brownNormal = shuffled.filter(card => card.difficulty == 'normal' && card.color == 'brown');
const brownEasy = shuffled.filter(card => card.difficulty == 'easy' && card.color == 'brown');
const brownHard = shuffled.filter(card => card.difficulty == 'hard' && card.color == 'brown');

let deckAz = [];
let deckCt = [];
let deckIog = [];
let deckShu = [];

// normal difficulty

const normalAz = () => {
  for (let i = 0; i < 5; i++) {
    deckAz.push(greenNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 9; i++) {
    deckAz.push(brownNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckAz.push(blueNormal.splice(0, 1)[0]);
  };
};

const normalCt = () => {
  for (let i = 0; i < 4; i++) {
    deckCt.push(greenNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 9; i++) {
    deckCt.push(brownNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckCt.push(blueNormal.splice(0, 1)[0]);
  };
};

const normalIog = () => {
  for (let i = 0; i < 5; i++) {
    deckIog.push(greenNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 9; i++) {
    deckIog.push(brownNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckIog.push(blueNormal.splice(0, 1)[0]);
  };
};

const normalShu = () => {
  for (let i = 0; i < 6; i++) {
    deckShu.push(greenNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 8; i++) {
    deckShu.push(brownNormal.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckShu.push(blueNormal.splice(0, 1)[0]);
  };
};

//easy difficulty 

const easyAz = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 2) {
      deckAz.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 2) {
      deckAz.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 2) {
      deckAz.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

const easyCt = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 2) {
      deckCt.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 2) {
      deckCt.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 2) {
      deckCt.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

const easyIog = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 2) {
      deckIog.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 2) {
      deckIog.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 2) {
      deckIog.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

const easyShu = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 2) {
      deckShu.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 2) {
      deckShu.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 2) {
      deckShu.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

// hard difficulty

const hardAz = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 2) {
      deckAz.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 2) {
      deckAz.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 2) {
      deckAz.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(blueHard.splice(0, 1)[0]);
    };
  };
};

const hardCt = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 2) {
      deckCt.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 2) {
      deckCt.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 2) {
      deckCt.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(blueHard.splice(0, 1)[0]);
    };
  };
};

const hardIog = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 2) {
      deckIog.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 2) {
      deckIog.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 2) {
      deckIog.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(blueHard.splice(0, 1)[0]);
    };
  };
};

const hardShu = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 2) {
      deckShu.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 2) {
      deckShu.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 2) {
      deckShu.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(blueHard.splice(0, 1)[0]);
    };
  };
};

// very easy difficulty

const veryEasyAz = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 0) {
      deckAz.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 0) {
      deckAz.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 0) {
      deckAz.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

const veryEasyCt = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 0) {
      deckCt.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 0) {
      deckCt.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 0) {
      deckCt.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

const veryEasyIog = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 0) {
      deckIog.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 0) {
      deckIog.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 0) {
      deckIog.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

const veryEasyShu = () => {
  for (let i = 0; i < 5; i++) {
    if (greenEasy.length === 0) {
      deckShu.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(greenEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownEasy.length === 0) {
      deckShu.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(brownEasy.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueEasy.length === 0) {
      deckShu.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(blueEasy.splice(0, 1)[0]);
    };
  };
};

// very hard difficulty

const veryHardAz = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 0) {
      deckAz.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 0) {
      deckAz.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 0) {
      deckAz.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckAz.push(blueHard.splice(0, 1)[0]);
    };
  };
};

const veryHardCt = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 0) {
      deckCt.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 0) {
      deckCt.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 0) {
      deckCt.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckCt.push(blueHard.splice(0, 1)[0]);
    };
  };
};

const veryHardIog = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 0) {
      deckIog.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 0) {
      deckIog.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 0) {
      deckIog.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckIog.push(blueHard.splice(0, 1)[0]);
    };
  };
};

const veryHardShu = () => {
  for (let i = 0; i < 5; i++) {
    if (greenHard.length === 0) {
      deckShu.push(greenNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(greenHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 9; i++) {
    if (brownHard.length === 0) {
      deckShu.push(brownNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(brownHard.splice(0, 1)[0]);
    };
  };
  for (let i = 0; i < 2; i++) {
    if (blueHard.length === 0) {
      deckShu.push(blueNormal.splice(0, 1)[0]);
    } else {
      deckShu.push(blueHard.splice(0, 1)[0]);
    };
  };
};

azCard.onclick = () => {
  normal.onclick = () => {
    normalAz();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckAz);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckAz);
  };
  easy.onclick = () => {
    easyAz();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckAz);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckAz);
  };
  hard.onclick = () => {
    hardAz();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckAz);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckAz);
  };
  veryEasy.onclick = () => {
    veryEasyAz();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckAz);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckAz);
  };
  veryHard.onclick = () => {
    veryHardAz();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckAz);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckAz);
  };
};

ctCard.onclick = () => {
  normal.onclick = () => {
    normalCt();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckCt);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckCt);
  };
  easy.onclick = () => {
    easyCt();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckCt);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckCt);
  };
  hard.onclick = () => {
    hardCt();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckCt);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckCt);
  };
  veryEasy.onclick = () => {
    veryEasyCt();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckCt);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckCt);
  };
  veryHard.onclick = () => {
    veryHardCt();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckCt);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckCt);
  };
};

iogCard.onclick = () => {
  normal.onclick = () => {
    normalIog();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckIog);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckIog);
  };
  easy.onclick = () => {
    easyIog();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckIog);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckIog);
  };
  hard.onclick = () => {
    hardIog();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckIog);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckIog);
  };
  veryEasy.onclick = () => {
    veryEasyIog();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckIog);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckIog);
  };
  veryHard.onclick = () => {
    veryHardIog();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckIog);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckIog);
  };
};

shuCard.onclick = () => {
  normal.onclick = () => {
    normalShu();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckShu);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckShu);
  };
  easy.onclick = () => {
    easyShu();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckShu);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckShu);
  };
  hard.onclick = () => {
    hardShu();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckShu);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckShu);
  };
  veryEasy.onclick = () => {
    veryEasyShu();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckShu);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckShu);
  };
  veryHard.onclick = () => {
    veryHardShu();
    myCard.onclick = () => {
      let shaffledDeck = shuffle(deckShu);
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(deckShu);
  };
};



// if (selectedCard.pop() == 1) {
//   myCard.onclick = () => {
//     let shaffledDeck = shuffle(deckCt);
//     let lastCard = shaffledDeck.pop();
//     document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
//   }
//   console.log(deckCt);
// }

// if ((selectedCard.pop() == 1) && (selectedDifficulty.pop() == 2)) {

  
// };
// if ((selectedCard.pop() == 2) && (selectedDifficulty.pop() == 2)) {
//   let lastCard = deckIog.pop();
//   document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
//   console.log(deckIog);
// };
// if ((selectedCard.pop() == 3) && (selectedDifficulty.pop() == 2)) {
//   let lastCard = deckShu.pop();
//   document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
//   console.log(deckShu);
// };



// azCard.onclick = () => {
//   let lastCard = shuffled.pop()
//   document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
// }


// cards.forEach((c,i) => c.onclick = () => {
//   selectedCard.push(i);
// });

// difficultys.forEach((d,i) => d.onclick = () => {
//   selectedDifficulty.push(i);
// });











// mythiCard.onclick = () => {
//   let finalDeck = shuffle(fullDeck);
//   let lastCard = finalDeck.pop(); 
//   document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
// }

// const messBtn = document.querySelector('.shaffle-btn');
// messBtn.onclick = () => {
  
//   return finalDeck
// };
// console.log(finalDeck)




//set counter function




