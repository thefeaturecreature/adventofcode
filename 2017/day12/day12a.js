const aoc = require('../lib/aoc.js');
const pipes = inputfile('./day12.txt').split('\n');

let well = [];

primeTheWell = (n) => {
  well.push(n)
  for(i = well.length - 1;i<well.length;i++){
    item = well[i];
    pipes
      .filter(s => s.startsWith(`${item} <->`))
      .forEach(swap => {
      swap
        .split(' <-> ')[1]
        .split(', ')
        .forEach(item => {
          if(!well.includes(item) && item > 0) {
            well.push(item)
          }
        })
    })
  }
}
primeTheWell(0);
console.log(`In group 0: ${well.length}`)