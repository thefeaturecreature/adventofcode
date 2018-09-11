const aoc = require('../lib/aoc.js');
let pipes = inputfile('./day12.txt').split('\n');
let well = [0];
let count = 0;

for(i=0;i<pipes.length;i++){
  next = pipes[i].split(' <-> ')[0]
  if(!well.includes(next)) {
    well.push(next)
    count++;
    for(j = well.length - 1;j<well.length;j++){
      item = well[j];
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
}
console.log(count)