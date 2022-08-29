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

const greenCards =  shuffled.filter(card => card.color == 'green');
const greenNormal = shuffled.filter(card => card.difficulty == 'normal' && card.color == 'green');
const greenEasy = shuffled.filter(card => card.difficulty == 'easy' && card.color == 'green');
const greenHard = shuffled.filter(card => card.difficulty == 'hard' && card.color == 'green');
const blueCards = shuffled.filter(card => card.color == 'blue');
const blueNormal = shuffled.filter(card => card.difficulty == 'normal' && card.color == 'blue');
const blueEasy = shuffled.filter(card => card.difficulty == 'easy' && card.color == 'blue');
const blueHard = shuffled.filter(card => card.difficulty == 'hard' && card.color == 'blue');
const browncards = shuffled.filter(card => card.color == 'brown');
const brownNormal = shuffled.filter(card => card.difficulty == 'normal' && card.color == 'brown');
const brownEasy = shuffled.filter(card => card.difficulty == 'easy' && card.color == 'brown');
const brownHard = shuffled.filter(card => card.difficulty == 'hard' && card.color == 'brown');

let deckAz = [];
let deckCt = [];
let deckIog = [];
let deckShu = [];

// normal difficulty

const normalAz = () => {
  if(deckAz.length !== 0) deckAz = [];
  for (let i = 0; i < 5; i++) {
    deckAz.push(greenCards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 9; i++) {
    deckAz.push(browncards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckAz.push(blueCards.splice(0, 1)[0]);
  };
};

const normalCt = () => {
  if(deckCt.length !== 0) deckCt = [];
  for (let i = 0; i < 4; i++) {
    deckCt.push(greenCards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 9; i++) {
    deckCt.push(browncards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckCt.push(blueCards.splice(0, 1)[0]);
  };
};

const normalIog = () => {
  if(deckIog.length !== 0) deckIog = [];
  for (let i = 0; i < 5; i++) {
    deckIog.push(greenCards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 9; i++) {
    deckIog.push(browncards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckIog.push(blueCards.splice(0, 1)[0]);
  };
};

const normalShu = () => {
  if(deckShu.length !== 0) deckShu = [];
  for (let i = 0; i < 6; i++) {
    deckShu.push(greenCards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 8; i++) {
    deckShu.push(browncards.splice(0, 1)[0]);
  };
  for (let i = 0; i < 2; i++) {
    deckShu.push(blueCards.splice(0, 1)[0]);
  };
};

//easy difficulty 

const easyAz = () => {
  if(deckAz.length !== 0) deckAz = [];
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
  if(deckCt.length !== 0) deckCt = [];
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
  if(deckIog.length !== 0) deckIog = [];
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
  if(deckShu.length !== 0) deckShu = [];
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
  if(deckAz.length !== 0) deckAz = [];
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
  if(deckCt.length !== 0) deckCt = [];
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
  if(deckIog.length !== 0) deckIog = [];
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
  if(deckShu.length !== 0) deckShu = [];
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
  if(deckAz.length !== 0) deckAz = [];
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
  if(deckCt.length !== 0) deckCt = [];
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
  if(deckIog.length !== 0) deckIog = [];
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
  if(deckShu.length !== 0) deckShu = [];
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
  if(deckAz.length !== 0) deckAz = [];
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
  if(deckCt.length !== 0) deckCt = [];
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
  if(deckIog.length !== 0) deckIog = [];
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
  if(deckShu.length !== 0) deckShu = [];
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

window.onerror = function() {
  alert('You messed it all');
  location.reload();
}

azCard.onclick = () => {
  normal.addEventListener('click', e =>{
    normalAz();
    let shaffledDeck = shuffle(deckAz);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  easy.addEventListener('click', e => {
    easyAz();
    let shaffledDeck = shuffle(deckAz);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  hard.addEventListener('click', e => {
    hardAz();
    let shaffledDeck = shuffle(deckAz);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryEasy.addEventListener('click', e => {
    veryEasyAz();
    let shaffledDeck = shuffle(deckAz);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryHard.addEventListener('click', e => {
    veryHardAz();
    let shaffledDeck = shuffle(deckAz);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
};

ctCard.onclick = () => {
  normal.addEventListener('click', e =>{
    normalCt();
    let shaffledDeck = shuffle(deckCt);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  easy.addEventListener('click', e => {
    easyCt();
    let shaffledDeck = shuffle(deckCt);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  hard.addEventListener('click', e => {
    hardCt();
    let shaffledDeck = shuffle(deckCt);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryEasy.addEventListener('click', e => {
    veryEasyCt();
    let shaffledDeck = shuffle(deckCt);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryHard.addEventListener('click', e => {
    veryHardCt();
    let shaffledDeck = shuffle(deckCt);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
};

iogCard.onclick = () => {
  normal.addEventListener('click', e =>{
    normalIog();
    let shaffledDeck = shuffle(deckIog);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  easy.addEventListener('click', e => {
    easyIog();
    let shaffledDeck = shuffle(deckIog);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  hard.addEventListener('click', e => {
    hardIog();
    let shaffledDeck = shuffle(deckIog);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryEasy.addEventListener('click', e => {
    veryEasyIog();
    let shaffledDeck = shuffle(deckIog);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryHard.addEventListener('click', e => {
    veryHardIog();
    let shaffledDeck = shuffle(deckIog);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
};

shuCard.onclick = () => {
  normal.addEventListener('click', e =>{
    normalShu();
    let shaffledDeck = shuffle(deckShu);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  easy.addEventListener('click', e => {
    easyShu();
    let shaffledDeck = shuffle(deckShu);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  hard.addEventListener('click', e => {
    hardShu();
    let shaffledDeck = shuffle(deckShu);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryEasy.addEventListener('click', e => {
    veryEasyShu();
    let shaffledDeck = shuffle(deckShu);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
  veryHard.addEventListener('click', e => {
    veryHardShu();
    let shaffledDeck = shuffle(deckShu);
    myCard.onclick = () => {
      let lastCard = shaffledDeck.pop();
      document.querySelector('.last-card').style.background = `url(${lastCard.cardFace}) no-repeat 50%`;
    };
    console.log(shaffledDeck);
  },{once:true});
};
