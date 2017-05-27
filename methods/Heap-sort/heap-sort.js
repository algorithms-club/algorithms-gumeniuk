'use strict';

module.exports = function(arr) {
   if (!arr.length) {
        return arr
    }
    arr_len = arr.length;

    for (var i = Math.floor(arr_len / 2); i >= 0; i -= 1)      {
        heap_root(arr, i);
    }

    for (i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arr_len--;
        heap_root(arr, 0);
    }
return arr
}
	
	 var arr_len;
function heap_root(arr, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < arr_len && arr[left] > arr[max]) {
        max = left;
    }

    if (right < arr_len && arr[right] > arr[max])     {
        max = right;
    }

    if (max != i) {
        swap(arr, i, max);
        heap_root(arr, max);
    }
}

function swap(arr, index_A, index_B) {
    var temp = arr[index_A];

    arr[index_A] = arr[index_B];
    arr[index_B] = temp;
}

   

