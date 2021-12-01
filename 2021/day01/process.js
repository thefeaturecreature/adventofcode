const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');



part1 = input
            .map((distance, index, arr) => (distance - arr[index-1])>0?1:0)
            .reduce((total, diff) => total + diff)

console.log("part 1:",part1);
//1374

part2 = input
            .map((distance, index, arr) => (arr[index+2]?(parseInt(arr[index+2]) + parseInt(arr[index+1]) + parseInt(distance)):0))
            .map((distance, index,arr) => (distance - arr[index-1])>0?1:0)
            .reduce((total, diff) => total + diff);

console.log("part 2:",part2);
//1418