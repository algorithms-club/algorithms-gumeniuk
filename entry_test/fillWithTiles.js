'use strict';

function fillWithTiles(width, hight, tileHight) {
  let tileInRow = Math.ceil(width / tileHight);
  let tileInColumn = Math.ceil(hight / tileHight);

  return tileInRow * tileInColumn;
}

module.exports = fillWithTiles;