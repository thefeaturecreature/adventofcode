const aoc = require('../lib/aoc.js');
const masslist = inputfile('./day01.txt');

recursefuel = (fuel => {
    looping = true;
    fuelweight = 0;
    while (looping) {
        fuel = Math.floor(parseInt(fuel)/3) - 2;
        if(fuel > 0) {
            fuelweight += fuel
        } else {looping = false}
    }
    return fuelweight
})

let accum = 0;
totalfuel = masslist
    .map(mass => recursefuel(mass))
    .reduce((accum, fuel) => {
        return accum + fuel
    })

console.log(totalfuel)
