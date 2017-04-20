'use strict';

function waterMelon(waterMelonWeight) {
	
	if ((Math.floor(waterMelonWeight / 2) != waterMelonWeight/2) || (waterMelonWeight<3)) {
	return 'NO'
	}
    else {
	   return 'YES'
	   }
	
}

module.exports = waterMelon;