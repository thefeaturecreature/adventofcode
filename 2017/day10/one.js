const aoc = require('../../lib/aoc.js');
const instruct = inputfile('input.txt','split');

let circle = [];
for (i=0; i<256; i++){
	circle.push(i);
}

circle = stepknots(circle,instructions);
console.log('result: ',circle[0] * circle[1]);
// Answer: 20056