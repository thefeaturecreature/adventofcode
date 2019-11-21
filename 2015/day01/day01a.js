const aoc = require('../lib/aoc.js');
const changelist = inputfile('./day01.txt');
let accum = 0;
    a = [...changelist]
        .map(part => {return part == "("?1:-1})
        .reduce((accum, part) => accum + part)
    console.log(a)
