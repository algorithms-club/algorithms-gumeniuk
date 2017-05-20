'use strict';

module.exports = function(arr) {
   if (!arr.length) {
        return arr
    }


    let i = 0;
    let k = 0;
    let j = 0;
    let swap = 0;

    for (i = 0; i < arr.length; i++) {

        if (arr[i + 1] < arr[i]) {

            j = 0;
			
            while (arr[j] < arr[i + 1]) {
                j += 1;
            }

            swap = arr[i + 1];

            for (k = i; k >= j; k--) {
                arr[k + 1] = arr[k];
            }
            arr[j] = swap;

        }

    }
    return arr
}
	
	