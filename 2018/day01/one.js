const aoc = require('../../lib/aoc.js');
const changelist = inputfile('input.txt');
const result = changelist
  .map(change => parseInt(change))
  .reduce((frequency, change) => frequency + parseInt(change));
console.log(result);
// Answer: 502