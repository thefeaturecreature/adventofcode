const aoc = require('../lib/aoc.js');
const instruct = aoc.inputfile('./day09.txt');

let total = 0;
let garbage = false;
for (i = 0; i < instruct.length; i++){
  let item = instruct[i]
  switch(item){
    case '!':
      i++;
      break;
    case '<':
      if(garbage) total++;
      garbage = true;
      break;
    case '>':
      garbage = false;
      break;
    default:
      if(garbage) total++;
  }
}

console.log(total)