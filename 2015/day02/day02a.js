const aoc = require('../lib/aoc.js');
const presents = inputfile('./day02.txt');
let swap = new Array(),
    accum = 0;

papersize = dimensions => {
    dimensions = dimensions.split("x")
    swap[0] = dimensions[0] * dimensions[1]
    swap[1] = dimensions[0] * dimensions [2]
    swap[2] = dimensions[1] * dimensions [2]
    swap = swap.sort((a, b) => a-b)
    return (swap[0] * 3) + (swap[1] * 2) + (swap[2] * 2)
}

paper = presents.map(a => {
    return papersize(a)
})
.reduce((accum, part) => accum + part)
console.log(paper)

// console.log(papersize("2x3x4"))
 // 2x3x4  requires 2*6 + 2*12 + 2*8  = 52 + 6 = 58

 // console.log(papersize("1x1x10"))
// 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 + 1 = 43
