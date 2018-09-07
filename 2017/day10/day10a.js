const aoc = require('../lib/aoc.js');
const instruct = inputfile('./day10.txt');
let instructions = instruct.split(',');

let circle = [];
for (i=0; i<256; i++){
	circle.push(i);
}

circle = stepknots(circle,instructions);
console.log('result: ',circle[0] * circle[1])