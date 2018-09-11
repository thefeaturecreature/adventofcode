const aoc = require('../lib/aoc.js');
let pipes = inputfile('./day12.txt').split('\n');
let well = [0];

for(i=0;i<well.length;i++){
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
console.log(well.length)