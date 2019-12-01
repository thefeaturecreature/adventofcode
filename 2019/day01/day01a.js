const aoc = require('../lib/aoc.js');
const masslist = inputfile('./day01.txt');

let accum = 0;
totalfuel = masslist
    .map(mass => Math.floor(parseInt(mass)/3) - 2)
    .reduce((accum, fuel) => {
        return accum + fuel
    })

console.log(totalfuel)