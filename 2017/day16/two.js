const aoc = require('../../lib/aoc.js');
const d2 = require('./one.js');
const instructions = inputfile('input.txt');

let list = "abcdefghijklmnop"

findrepeat = stage => {  
  let construct = [];
  for(i=0;i<1000;i++) {
    stage = runpage(stage)
    if(!construct.includes(stage)) {
      construct.push(stage);
    } else {
      return i;
      break;
    }
  }       
}

let newgoal = 1000000000 % findrepeat(list);

for (i=0; i < newgoal; i++) {
  list = runpage(list);
}
console.log(list)
// Answer: ibmchklnofjpdeag