const aoc = require('../lib/aoc.js');
const levels = inputfile('./day13.txt');

let whereami = (size,ticks) => {
  let maxint = size - 1;
  let col = Math.trunc(ticks / maxint)
  let rem = ticks - (maxint * col) ;
  return (col % 2 == 0)? rem : (maxint - rem);
}


let severity = start => {
  return levels
  .split('\n')
  .reduce((total, step) => {
    parts = step
      .split(': ')
      .map(part => parseInt(part));
      return ((whereami(parts[1],parts[0] + start) == 0)?
      (parts[0] * parts[1]) : 0) + total;
  }, 0)
}

console.log(severity(0))