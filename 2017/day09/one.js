const aoc = require('../../lib/aoc.js');
const instruct = inputfile('input.txt',false);

let layer = 1, 
    total = 0,
    garbage = false, 
    toggleopen = false;

for (i = 0; i < instruct.length; i++){
  let item = instruct[i];
  switch(item){
    case '!':
      i++;
      break;
    case '<':
      garbage = true;
      break;
    case '>':
      garbage = false;
      break;
    case '{':
      if(toggleopen && !garbage) {
        layer++;
        total += layer; 
      } else if(!toggleopen && !garbage) {
        total += layer;
        toggleopen = true;
      }
      break;
    case '}':
      if(toggleopen && !garbage) {
        toggleopen = false 
      } else if(!toggleopen && !garbage) {
        layer--
      }
      break;
  }
}

console.log(total)
// Answer: 8337