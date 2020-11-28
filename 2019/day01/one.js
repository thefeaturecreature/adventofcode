const aoc = require('../../lib/aoc.js');
const masslist = inputfile('input.txt');

calcfuel = (mass => Math.floor(parseInt(mass)/3) - 2);

let accum = 0;
totalfuel = masslist
    .map(mass => calcfuel(mass))
    .reduce((accum, fuel) => {
        return accum + fuel;
    });

console.log(totalfuel);
// Answer: 3256794