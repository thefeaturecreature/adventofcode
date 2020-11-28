const aoc = require('../../lib/aoc.js');
const d2 = require('./one.js');
const pipes = inputfile('input.txt');

let well = [];
let count = 0;

for(i=count;i<pipes.length;i++){
  next = pipes[i].split(' <-> ')[0]
  if(!well.includes(next)) {
    count++;
    primeTheWell(next)
  }
}
console.log(`# of groups: ${count}`)
// Answer: 351