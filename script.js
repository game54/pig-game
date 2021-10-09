'use strict';

// GENERAL STUFF

let diceImg = document.querySelector('.dice');
diceImg.classList.add('invisible');

const player1Current = document.querySelector('#current--0');
const player2Current = document.querySelector('#current--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let current1 = 0;
let current2 = 0;
let score1 = 0;
let score2 = 0;
let randomDice = 0;

// ROLL DICE FUNCTION

const diceRoll = function (item) {
  if (randomDice === 1) {
    diceImg.classList.remove('invisible');
    document.querySelector('.dice').src = 'dice-1.png';
    item = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  } else if (randomDice === 2) {
    diceImg.classList.remove('invisible');
    document.querySelector('.dice').src = 'dice-2.png';
    item = item + 2;
  } else if (randomDice === 3) {
    diceImg.classList.remove('invisible');
    document.querySelector('.dice').src = 'dice-3.png';
    item = item + 3;
  } else if (randomDice === 4) {
    diceImg.classList.remove('invisible');
    document.querySelector('.dice').src = 'dice-4.png';
    item = item + 4;
  } else if (randomDice === 5) {
    diceImg.classList.remove('invisible');
    document.querySelector('.dice').src = 'dice-5.png';
    item = item + 5;
  } else if (randomDice === 6) {
    diceImg.classList.remove('invisible');
    document.querySelector('.dice').src = 'dice-6.png';
    item = item + 6;
  }
  console.log(item + 'item');
  return item;
};

// FUNCTION TO SET CURRENT 0 AND DISPLAY SCORE ON EACH PLAYER

const currentAndScore = function () {
  current1 = 0;
  current2 = 0;

  player1Score.textContent = score1;
  player1Current.textContent = current1;
  player2Score.textContent = score2;
  player2Current.textContent = current2;
};

player1Score.textContent = score1;
player2Score.textContent = score2;

// ROLL DICE BUTTON INTERACTION

document.querySelector('.btn--roll').addEventListener('click', function () {
  randomDice = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDice);
  if (score1 < 50 && score2 < 50) {
    if (player1.classList.contains('player--active')) {
      current1 = diceRoll(current1);
      player1Current.textContent = current1;
    } else {
      current2 = diceRoll(current2);
      player2Current.textContent = current2;
    }
  }
});

// HOLD BUTTON INTERACTION

document.querySelector('.btn--hold').addEventListener('click', function () {
  score1 = score1 + current1;
  score2 = score2 + current2;
  if (score1 >= 50) {
    player1.style.backgroundColor = '#60b347';
    document.querySelector('#name--0').textContent = 'you won!';
    player1Score.textContent = score1;
    current1 = 0;
    player1Current.textContent = current1;
  } else if (score2 >= 50) {
    player2.style.backgroundColor = '#60b347';
    document.querySelector('#name--1').textContent = 'you won!';
    player2Score.textContent = score2;
    current2 = 0;
    player2Current.textContent = current2;
  } else {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');

    currentAndScore();
  }
});

// CHEAT
let cheat = '';
document.addEventListener('keydown', function (e) {
  cheat = cheat + e.key;
  console.log(cheat);
  if (cheat === 'xexe') {
    player2.style.backgroundColor = '#60b347';
    document.querySelector('#name--1').textContent = 'you won!';
    player2Score.textContent = score2;
    current2 = 0;
    player2Current.textContent = current2;
    player2Score.textContent = '999+';
  }
});

// NEW GAME BUTTON INTERACTION

document.querySelector('.btn--new').addEventListener('click', function () {
  score1 = 0;
  score2 = 0;
  currentAndScore();
  player1.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  player2.style.backgroundColor = 'initial';
  diceImg.classList.add('invisible');
  document.querySelector('#name--0').textContent = 'Player 1';
  document.querySelector('#name--1').textContent = 'Player 2';
  if (player1.classList.contains('player--active')) return;
  else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
});
