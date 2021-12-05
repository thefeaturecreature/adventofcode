const aoc = require('../../lib/aoc.js');
const report = inputfile('report.txt');

part1 = report.map((distance, index, arr) => (distance - arr[index-1])>0?1:0)
            .reduce((total, diff) => total + diff)

console.log("part 1:",part1);
//1374