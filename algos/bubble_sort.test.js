const sort = require('./bubble_sort').sort;
const assert = require('node:assert').strict;
const array = [5, 4, 3, 2, 1];
const sorted_array = [1, 2, 3, 4, 5];
sort(array);
assert.deepEqual(array, sorted_array);
