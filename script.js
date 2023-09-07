'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const textContent = message => {
  document.querySelector('.message').textContent = message;
};
const scoreValue = value => {
  document.querySelector('.score').textContent = value;
};
const backgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    textContent('No number!');
  } else if (guess === number) {
    textContent('Correct Number!');
    backgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      textContent(guess > number ? 'Too high!' : 'Too low!');
      score--;
      scoreValue(score);
    } else {
      textContent('You lost the game!');
      scoreValue(0);
      backgroundColor('red');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = '20';
  number = Math.trunc(Math.random() * 20) + 1;
  textContent('Start guessing...');
  scoreValue(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
});
