'use strict';

function stonesOnTheTable(stones) {
	
	let i = 1;
	let newStones = stones.charAt(0);
	
	do {
	
         if (stones.charAt(i) != stones.charAt(i-1))
		 {
         newStones = newStones + stones.charAt(i);
	      }
    i += 1;

	} while (i < stones.length);
	
    return (stones.length - newStones.length);
	
	
}

module.exports = stonesOnTheTable;