const aoc = require('../../lib/aoc.js');
const changelist = inputfile('input.txt','single');

const floor = [...changelist]
    .map(part => (part == "("?1:-1))
    .reduce((accum, part) => accum + part);

console.log(floor);
// answer: 138
