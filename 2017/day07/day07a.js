const aoc = require('../lib/aoc.js');
const spread = aoc.inputfile('./day07.txt', true);

const parents = spread.filter(x => x.includes('->'))
const children = parents.map(i => i.slice(i.indexOf('->') + 3, i.length));

parents.forEach((i, index) => {
  let b2 = i.slice(0, i.indexOf(' (',0));
  let c2 = children.filter(s => s.includes(b2))
  if (c2.length == 0) console.log(b2);
});