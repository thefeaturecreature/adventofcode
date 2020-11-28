const aoc = require('../../lib/aoc.js');
const presents = inputfile('input.txt');
let swap = new Array(),
    accum = 0;

papersize = dimensions => {
    dimensions = dimensions.split("x");
    swap[0] = dimensions[0] * dimensions[1];
    swap[1] = dimensions[0] * dimensions [2];
    swap[2] = dimensions[1] * dimensions [2];
    swap = swap.sort((a, b) => a-b);
    return (swap[0] * 3) + (swap[1] * 2) + (swap[2] * 2);
}

paper = presents.map(a => {
    return papersize(a);
})
.reduce((accum, part) => accum + part);
console.log(paper);
// answer: 1586300