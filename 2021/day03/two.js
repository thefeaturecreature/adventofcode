const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');

let oxygen = input,
    bit = 0;
do {
    totalat = position => oxygen.map(e => parseInt(e.charAt(position)))
                                .reduce((e,f) => e+f);

    greaterat = position => totalat(position)>=(oxygen.length/2)?1:0;

    oxygen = oxygen.filter(e => e.charAt(bit) == greaterat(bit))
    
    bit++
} while(oxygen.length > 1)

let co2 = input,
    cobit = 0;
do {
    totalat = position => co2.map(e => parseInt(e.charAt(position)))
                             .reduce((e,f) => e+f);

    lesserat = position => totalat(position)>=(co2.length/2)?0:1;        

    co2 = co2.filter(e => e.charAt(cobit) == lesserat(cobit));
    
    cobit++
} while(co2.length > 1)

console.log(parseInt(oxygen,2) * parseInt(co2,2));
//903810
