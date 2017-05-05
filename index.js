'use strict';

let bubbleSort = require('./sorting/bubble-sort');
let fillWithTiles = require('./entry_test/fillWithTiles');
let UnionFind = require('./unionFind');
let waterMelon = require('./entry_test/waterMelon')
let stonesOnTheTable = require('./entry_test/stonesOnTheTable')

let algolib = {
    bubbleSort,
    fillWithTiles,
    UnionFind,
	waterMelon,
	stonesOnTheTable
}

module.exports = algolib;