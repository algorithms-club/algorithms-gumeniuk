'use strict';

const algolib = require('../index.js');

describe('merge-sort', function() {
    it('should return emty array when empty array was passed', function() {
        let sortedArr = algolib.mergeSort([]);

        sortedArr.should.be.eql([]);
    });

    it('should return sorted array if sorted array was passed', function() {
        let sortedArr = algolib.mergeSort([1,2,3,4]);

        sortedArr.should.be.eql([1,2,3,4]);
    });

    it('should sort array', function() {
        let sortedArr = algolib.mergeSort([2, 3, 6, 1, 3, 4, 7, 5]);

        sortedArr.should.be.eql([1, 2, 3, 3, 4, 5, 6, 7]);
    })

})