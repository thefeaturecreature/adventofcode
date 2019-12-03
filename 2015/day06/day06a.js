const aoc = require('../lib/aoc.js');
const lightpath = inputfile('./day06.txt', true);
let lightgrid = new Set();

lightparts = lightpath.forEach(instr => {
    lightsplit = /(?<type>toggle|turn on|turn off) (?<x1>[\d]+),(?<y1>[\d]+) through (?<x2>[\d]+),(?<y2>[\d]+)/;
    parts = instr.match(lightsplit).groups

    for(x = parts.x1; x <= parts.x2; x++) {
        for(y = parts.y1; y <= parts.y2; y++) {
            plot = x + "x" + y;
            if(lightgrid.has(plot)){ 
                if (parts.type !== "turn on") lightgrid.delete(plot)
            } else {
                if (parts.type !== "turn off") lightgrid.add(plot)
            }
        }
    }
})
// Not 544979
console.log(lightgrid.size)