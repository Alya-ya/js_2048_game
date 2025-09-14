'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const cells = document.querySelectorAll('.field-cell');
const start = document.querySelector('.start');
const restart = document.querySelector('.restart');

function all() {
  const state = game.getState();

  cells.forEach((cell, i) => {
    const row = Math.floor(i / 4);
    const column = i % 4;

    if (state[row][column] > 0) {
      cell.textContent = state[row][column];
    }

    if (state[row][column] === 0) {
      cell.textContent = '';
    }
  });
}

start.addEventListener('click', () => {
  game.start();
  all();
});

restart.addEventListener('click', () => {
  game.restart();
  all();
});

document.addEventListener('keydown', (events) => {
  if (game.getStatus() !== 'playing') {
    return;
  }

  let moved = false;

  switch (events.key) {
    case 'ArrowLeft':
      game.moveLeft();
      moved = true;
      break;

    case 'ArrowRight':
      game.moveRight();
      moved = true;
      break;

    case 'ArrowUp':
      game.moveUp();
      moved = true;
      break;

    case 'ArrowDown':
      game.moveDown();
      moved = true;
      break;
  }

  if (moved) {
    all();
  }
});

all();
