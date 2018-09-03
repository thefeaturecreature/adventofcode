const aoc = require('../lib/aoc.js');
const secret = aoc.inputfile('./day01.txt');
const jump = 1;

let day1 = source => Array.from(source)
  .map(item => parseInt(item))
  .filter((item, index, array) => { 
    if(((index >= array.length - jump) && item === array[(index - array.length) + jump]) || (item === array[index + jump])) {
      return item;
    } 
  })
  .reduce((sumtotal, item) => sumtotal + item);

console.log(day1(secret));