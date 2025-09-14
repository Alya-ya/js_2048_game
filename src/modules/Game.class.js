'use strict';

class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */
  constructor(initialState) {
    if (initialState) {
      // копія масиву
      this._board = initialState.map((row) => row.slice());
    } else {
      // порожнє поле 4×4
      this._board = Array.from({ length: 4 }, () => Array(4).fill(0));
    }

    this._score = 0;
    this._status = 'idle';
  }

  moveLeft() {
    let moved = false;

    for (let i = 0; i < 4; i++) {
      const row = this._board[i].filter((x) => x !== 0);

      for (let s = 0; s < row.length - 1; s++) {
        if (row[s] === row[s + 1]) {
          row[s] *= 2;
          this._score += row[s];
          row[s + 1] = 0;
        }
      }

      const newRow = row.filter((x) => x !== 0);

      while (newRow.length < 4) {
        newRow.push(0);
      }

      const oldRow = this._board[i].slice();

      this._board[i] = newRow;

      if (oldRow.toString() !== newRow.toString()) {
        moved = true;
      }
    }

    if (moved) {
      this.addRandomTile();
      this.checkWin();
    }
  }

  moveRight() {}
  moveUp() {}
  moveDown() {}

  /**
   * @returns {number}
   */
  getScore() {}

  /**
   * @returns {number[][]}
   */
  getState() {
    return this._board.map((row) => row.slice());
  }
  /**  return {string} One of: 'idle', 'playing', 'win', 'lose'

  `idle` - the game has not started yet (the initial state);
  `playing` - the game is in progress;
  `win` - the game is won;
  `lose` - the game is lost
**/

  getStatus() {}

  /**
   * Starts the game.
   */
  start() {}

  /**
   * Resets the game.
   */
  restart() {}

  // Add your own methods here
}

module.exports = Game;
