'use strict';

module.exports = function(arr) {
   if (!arr.length) {
        return arr
    }


   let left = [];
    let right = [];
    let chosen = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < chosen) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return module.exports(left).concat(chosen, module.exports(right));
};

	
	