// TODO: Finish

const aoc = require('../lib/aoc.js');
const spread = aoc.inputfile('./day07.txt', true);

const tops = spread.filter(x => !x.includes('->'))

console.log(tops.map(line => {
  let pairs = line.split(' (');
  return [pairs[0], pairs[1].split(')')[0]] ;
}))
