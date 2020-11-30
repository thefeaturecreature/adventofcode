const aoc = require('../../lib/aoc.js');
const masslist = inputfile('input.txt');

calcfuel = (mass => Math.floor(parseInt(mass)/3) - 2);

recursefuel = (mass => {
    fuelweight = 0;
    let fuel = calcfuel(mass);
    while (fuel > 0) {
        fuelweight += fuel;
        fuel = calcfuel(fuel);
    }
    return fuelweight;
})

totalfuel = masslist
    .map(mass => recursefuel(mass))
    .reduce((accum, fuel) => {
        return accum + fuel;
    })

console.log(totalfuel);
// Answer: 4882337
