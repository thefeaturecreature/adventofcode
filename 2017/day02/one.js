const aoc = require('../../lib/aoc.js');
const spread = inputfile('input.txt');

const check = spread
    .map(line => {
        const elements = line.split(' ');
        return Math.max.apply(null, elements) - Math.min.apply(null, elements);
    })
    .reduce((checksum, item) => checksum + item);

console.log(check);
// answer: 42378