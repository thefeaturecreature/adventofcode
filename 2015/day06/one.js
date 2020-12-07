const aoc = require('../../lib/aoc.js');
const lightpath = inputfile('testinput.txt');
let lightgrid = new Set();
console.log(lightgrid.size)
const lightparts = lightpath.forEach(instr => {
    pattern = /(toggle|turn on|turn off) ([\d]+),(?<y1>[\d]+) through ([\d]+),([\d]+)/;
    let [whole,type,x1,y1,x2,y2] = instr.match(pattern);

    for(x = x1; x <= x2; x++) {
        for(y = y1; y <= y2; y++) {
            plot = x + "x" + y;
            if(lightgrid.has(plot) && type !== "turn on") {
                lightgrid.delete(plot);
            } else if(type !== "turn off") {
                lightgrid.add(plot);
            }
        }
    }
})
console.log(lightgrid.size)
// Not: 544979
