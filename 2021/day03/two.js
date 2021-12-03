const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');

let oxygen = input,
    bit = 0;
do {
    totalat = position => oxygen.map(e => parseInt(e.substr(position,1))).reduce((e,f) => e+f);
    oxygen = oxygen.filter(e => e.substr(bit,1) == totalat(bit)>=(oxygen.length/2)?1:0);
    bit++
} while(oxygen.length > 1)

let co2 = input,
    cobit = 0;
do {
    totalat = position => co2.map(e => parseInt(e.substr(position,1))).reduce((e,f) => e+f);
    co2 = co2.filter(e => e.substr(cobit,1) == totalat(cobit)>=(co2.length/2)?0:1);
        cobit++
} while(co2.length > 1)

console.log(parseInt(oxygen,2) * parseInt(co2,2));
//903810
