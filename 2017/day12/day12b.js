const d2 = require('./day12a.js');
const pipes = inputfile('./day12.txt').split('\n');

let well = [];
let count = 0;

for(i=count;i<pipes.length;i++){
  next = pipes[i].split(' <-> ')[0]
  if(!well.includes(next)) {
    count++;
    primeTheWell(next)
  }
}
console.log(`# of groups: ${count}`)