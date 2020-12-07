const aoc = require('../../lib/aoc.js');
const secret = inputfile('input.txt',"single");
const jump = secret.length/2;

let stars = source => [...source]
  .map(item => parseInt(item))
  .filter((item, index, array) => { 
    if(((index >= array.length - jump) 
      && item === array[(index - array.length) + jump]) 
      || (item === array[index + jump])) {
      return item;
    } 
  })
  .reduce((sumtotal, item) => sumtotal + item);
console.log(stars(secret));
// answer: 1508