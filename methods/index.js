'use strict';

let bubbleSort = require('./Bubble-sort/bubble-sort');
let insertionSort = require('./Insertion-sort/insertion-sort');
let shellSort = require('./Shell-sort/shell-sort');
let mergeSort = require('./Merge-sort/merge-sort');
let quickSort = require('./Quick-sort/quick-sort');
let fillWithTiles = require('./FillWithTiles/fillWithTiles');
let UnionFind = require('./UnionFind/unionFind');
let waterMelon = require('./WaterMelon/waterMelon')
let stonesOnTheTable = require('./StonesOnTheTable/stonesOnTheTable')



let algolib = {
    bubbleSort,
	insertionSort,
	shellSort,
	mergeSort,
	quickSort,
    fillWithTiles,
    UnionFind,
	waterMelon,
	stonesOnTheTable
}

module.exports = algolib;