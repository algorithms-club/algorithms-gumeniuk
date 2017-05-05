'use strict';

const algolib = require('../index.js');

describe('#stonesOnTheTable', function() {
  it('should calculate minimum amount of stones to take away that any 2 nearby stones were different colored from from RRG', function() {
    let stonesAmount = algolib.stonesOnTheTable('RRG');
    stonesAmount.should.be.eql(1);
  });

  it('should calculate minimum amount of stones to take away that any 2 nearby stones were different colored from RRRRR', function() {
    let stonesAmount = algolib.stonesOnTheTable('RRRRR');
    stonesAmount.should.be.eql(4);
  });
  
  it('should calculate minimum amount of stones to take away that any 2 nearby stones were different colored from BRBG', function() {
    let stonesAmount = algolib.stonesOnTheTable('BRBG');
    stonesAmount.should.be.eql(0);
  });
  
  it('should calculate minimum amount of stones to take away that any 2 nearby stones were different colored from B', function() {
    let stonesAmount = algolib.stonesOnTheTable('B');
    stonesAmount.should.be.eql(0);
  });    
  
  it('should calculate minimum amount of stones to take away that any 2 nearby stones were different colored from RRRRRRRRGRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', function() {
    let stonesAmount = algolib.stonesOnTheTable('RRRRRRRRGRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
    stonesAmount.should.be.eql(47);
  }); 
   
  
});