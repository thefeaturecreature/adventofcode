// TODO: Finish
const aoc = require('../lib/aoc.js');
const instruct = aoc.inputfile('./day10.txt');
let instructions = instruct.split(',');

let circle = [];

// Create array
for (i=0; i<256; i++){
	circle.push(i);
}

circle = aoc.stepknots(circle,instructions);

console.log('result: ',circle[0] * circle[1])