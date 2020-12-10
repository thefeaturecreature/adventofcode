const aoc = require('../../lib/aoc.js');
const knapsack = inputfile('input.txt');

let connections = knapsack.length + 1,
    topvolt = Math.max.apply(null,knapsack) + 3,
    threes = Math.floor(topvolt / 3),
    ones = topvolt - (threes * 3),
    sum =  threes + ones;
    
do {
    threes -= 1;
    ones += 3;
    sum = threes + ones;
} while (sum != connections)

console.log(threes * ones)