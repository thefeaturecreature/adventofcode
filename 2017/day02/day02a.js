const aoc = require('../lib/aoc.js');
const spread = aoc.inputfile('./day02.txt', true);

let day2 = lines => 
Array.from(lines)
  .map(line => {
    elements = line.split(' ');
    return Math.max.apply(null, elements) - Math.min.apply(null, elements);
  })
  .reduce((checksum, item) => checksum + item)
  
console.log(day2(spread));