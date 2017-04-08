'use strict';

const algolib = require('../index.js');

describe('#fillWithTiles', function() {
  it('should calculate minimum amount of tiles to fill area (integers)', function() {
    let tileAmount = algolib.fillWithTiles(5,3,2);
    tileAmount.should.be.eql(6);
  });

  it('should calculate minimum amount of tiles to fill area (floats)', function() {
    let tileAmount = algolib.fillWithTiles(0.5,1.3,0.2);
    tileAmount.should.be.eql(21);
  });
});