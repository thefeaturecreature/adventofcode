const aoc = require('../../lib/aoc.js');
const spread = inputfile('input.txt');

let check = lines => [...lines]
  .map(line => {
    elements = line.split(' ');
    return Math.max.apply(null, elements) - Math.min.apply(null, elements);
  })
  .reduce((checksum, item) => checksum + item)

console.log(check(spread));
// answer: 42378