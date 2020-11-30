const aoc = require('../../lib/aoc.js');
const spread = inputfile('input.txt');
let bad, 
    checksum = 0;

const spreadproc = spread.forEach(e => {
    let words = e.split(' ').sort();
    bad = 0;
    allcompare(words, (wordA, wordB, indexA, indexB) => {
        if (bad == 0 && indexA != indexB && wordA == wordB) bad = 1;
    }) 
    if (bad == 0) checksum += 1;
});
console.log(checksum);
// answer: 325