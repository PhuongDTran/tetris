export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  // a row is an element in stage. each row is an array containing two-element arrays
  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
}

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        // check that the move is in between top and bottom boundaries
        // check that the move is in between left and right boundaries
        // check that the cell we're moving to isn't set to clear
        if (!stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear') {
          return true;
        }
      }
    }
  }
}
