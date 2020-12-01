const aoc = require('../../lib/aoc.js');
const expenses = inputfile('input.txt');

threewaycompare(expenses.map(e => Number(e)), (numA, numB, numC) => {
    if(numA + numB + numC == 2020) { 
        power = numA * numB * numC;
    }
})
console.log(power);
