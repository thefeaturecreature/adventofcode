const aoc = require('../../lib/aoc.js');
const presents = inputfile('input.txt');

const ribbonsize = dimensions => {
    dimensions = dimensions
        .split("x") 
        .sort((a, b) => a-b);
    ribbonwrap = (dimensions[0] * 2) + (dimensions[1] * 2);
    ribbonbow = dimensions[0] * dimensions[1] * dimensions[2]
    return ribbonwrap + ribbonbow
}

const ribbon = presents
    .map(a => ribbonsize(a))
    .reduce((accum, part) => accum + part);

console.log(ribbon)
// answer: 3737498