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
  
  it('should calculate minimum amount of tiles to fill area (total area is less than 1 tile)', function() {
    let tileAmount = algolib.fillWithTiles(45,59,99);
    tileAmount.should.be.eql(1);
  });
  
  it('should calculate minimum amount of tiles to fill area (big area and non integer size of tiles)', function() {
    let tileAmount = algolib.fillWithTiles(3245456465,65454864,22.37);
    tileAmount.should.be.eql(424507882092294);
  });    
});