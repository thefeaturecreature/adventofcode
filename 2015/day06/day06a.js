const aoc = require('../lib/aoc.js');
//const lightpath = ['turn on 0,0 through 999,999','toggle 0,0 through 999,0','turn off 499,499 through 500,500']
const lightpath = inputfile('./day06.txt', true);
let lightgrid = new Set();

lightpath.forEach(instr => {
    inst_parts = instr.match(/(toggle|turn on|turn off) ([\d]+),([\d]+) through ([\d]+),([\d]+)/)

    for(x = inst_parts[2];x <= inst_parts[4]; x++) {
        for(y = inst_parts[3];y <= inst_parts[5]; y++) {
            plot = x.toString() + "x" + y.toString();

            if(lightgrid.has(plot)){ 
                if (inst_parts[1] !== "turn on") lightgrid.delete(plot)
            } else {
                if (inst_parts[1] !== "turn off") lightgrid.add(plot)
            }

        }
    }
})

console.log(lightgrid.size)