const aoc = require('../../lib/aoc.js');
const masslist = inputfile('input.txt');

calcfuel = (mass => Math.floor(parseInt(mass)/3) - 2);

totalfuel = masslist
  .map(mass => calcfuel(mass))
  .reduce((accum, fuel) => accum + fuel);

console.log(totalfuel);
// Answer: 3256794