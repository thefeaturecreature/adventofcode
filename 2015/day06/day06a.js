const aoc = require('../lib/aoc.js');
// const lightpath = ['turn on 0,0 through 999,999','toggle 0,0 through 999,0','turn off 499,499 through 500,500']
const lightpath = inputfile('./day06.txt', true);
let lightgrid = new Set();

lightpath.forEach(instr => {
    numbers = instr.match(/(toggle|turn on|turn off) ([\d]+),([\d]+) through ([\d]+),([\d]+)/)
 
    switch (numbers[1]) {
        case "toggle":
            switch_on = true;
            switch_off = true;
            break;
        case "turn on":
            switch_on = true;
            switch_off = false;
            break;
        case "turn off":
            switch_on = false;
            switch_off = true;
            break;
    }

    for(x = numbers[2];x <= numbers[4]; x++) {
        for(y = numbers[3];y <= numbers[5]; y++) {
            plot = x.toString() + "x" + y.toString();

            if(lightgrid.has(plot)){ 
                if (switch_off) lightgrid.delete(plot)
            } else {
                if (switch_on) lightgrid.add(plot)
            }

        }
    }
})

console.log(lightgrid.size)