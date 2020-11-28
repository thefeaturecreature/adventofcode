const aoc = require('../../lib/aoc.js');
const levels = inputfile('input.txt',true);

let whereami = (size,ticks) => {
  let maxint = size - 1;
  let col = Math.trunc(ticks / maxint)
  let rem = ticks - (maxint * col) ;
  return (col % 2 == 0)? rem : (maxint - rem);
}

let severity = start => {
  return levels
  .reduce((total, step) => {
    parts = step
      .split(': ')
      .map(part => parseInt(part));
      return ((whereami(parts[1],parts[0] + start) == 0)?1 : 0) + total;
  }, 0)
}

for(i=0;i>=0;i++) {
  if (severity(i) == 0) {
    console.log(i);
    break
  }
} 
// Answer: 3943252