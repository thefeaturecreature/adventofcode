const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');

totalat = (arr, position) => arr.map(e => parseInt(e.charAt(position)))
                            .reduce((e,f) => e+f);

greaterat = (arr, position) => totalat(arr, position)>=(arr.length/2)?1:0;
lesserat = (arr, position) => totalat(arr, position)>=(co2.length/2)?0:1;        

let oxygen = input,
    bit = 0;

do {
    oxygen = oxygen.filter(e => e.charAt(bit) == greaterat(oxygen, bit));
    bit++;
} while(oxygen.length > 1)

let co2 = input,
    cobit = 0;
do {
    co2 = co2.filter(e => e.charAt(cobit) == lesserat(co2, cobit));
    cobit++;
} while(co2.length > 1)

console.log(parseInt(oxygen,2) * parseInt(co2,2));
//903810
