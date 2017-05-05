'use strict';

const algolib = require('../index.js');

describe('#waterMelon', function() {
  it('should define if 1 kg watermelon can be divided on parts with even weights', function() {
    let isWaterMelonDivided = algolib.waterMelon(5);
    isWaterMelonDivided.should.be.eql('NO');
  });

  it('should define if 2 kg watermelon can be divided on parts with even weights', function() {
    let isWaterMelonDivided = algolib.waterMelon(1);
    isWaterMelonDivided.should.be.eql('NO');
  });
  
  it('should define if 3 kg watermelon can be divided on parts with even weights', function() {
    let isWaterMelonDivided = algolib.waterMelon(2);
    isWaterMelonDivided.should.be.eql('NO');
  });
  
  it('should define if 4 kg watermelon can be divided on parts with even weights', function() {
    let isWaterMelonDivided = algolib.waterMelon(8);
    isWaterMelonDivided.should.be.eql('YES');
  });    
});