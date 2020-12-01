const aoc = require('../../lib/aoc.js');
const expenses = inputfile('input.txt');

allcompare(expenses.map(e => Number(e)), (numA, numB) => {
    if(numA + numB == 2020) { 
        power = numA * numB;
    }
})
console.log(power);
