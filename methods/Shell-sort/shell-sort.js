'use strict';

module.exports = function(arr) {
   if (!arr.length) {
        return arr;
    }

    let gap = 1;
    let elements = arr.length;
    let i = 0;

    while (gap <= elements / 3) {
        gap = gap * 3 + 1;
    }

    while (gap > 0) {

        for (let i = gap; i < elements; i++) {
            let swap = arr[i];
            let j = i;

            while (j > gap - 1 && arr[j - gap]
            >= swap) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = swap;
        }
        gap = (gap - 1) / 3;
        i++;
    }
    return arr
};

	
	