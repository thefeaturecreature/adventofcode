const aoc = require('../lib/aoc.js');
const presents = inputfile('./day02.txt', true);
let accum = 0;

ribbonsize = dimensions => {
    dimensions = dimensions.split("x")
    dimensions = dimensions.sort((a, b) => a-b)
    ribbonwrap = (dimensions[0] * 2) + (dimensions[1] * 2)
    ribbonbow = dimensions[0] * dimensions[1] * dimensions[2]
    return ribbonwrap + ribbonbow
}

ribbon = presents.map(a => {
    return ribbonsize(a)
})
.reduce((accum, part) => accum + part)
console.log(ribbon)

// console.log(ribbonsize("2x3x4"))
//2x3x4 requires 34 feet.

// console.log(ribbonsize("1x1x10"))
//1x1x10 requires 14 feet.