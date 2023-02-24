'use strict';
let guessNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

let newMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let colorIndicator = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
let messageColor = function (color) {
  document.querySelector('.message').style.color = color;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    newMessage('No number...');
  } else if (guess === guessNumber) {
    newMessage('🎉 correct answer');
    colorIndicator('green');
    messageColor('f34242');
    document.querySelector('.number').textContent = guessNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== guessNumber) {
    if (score > 1) {
      newMessage(
        guess > guessNumber ? 'Guess is too high' : 'Guess is too low'
      );
      colorIndicator('#f34242');
      messageColor('black');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      newMessage('You lost the game');
      colorIndicator('black');
      messageColor('red');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  newMessage('start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#444';
  document.querySelector('.guess').value = '';
});
