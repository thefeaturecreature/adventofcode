const aoc = require('../../lib/aoc.js');
const instructions = inputfile('input.txt');


const stepper = instructions => {
    let accumulator = 0,
        jumps = new Set(instructions.map((e,i) => (e.match(/jmp/) !== null)?i:'e').filter(e=> e !== 'e')),
        prevstep = 0,
        prevaccum = 0,
        prevseen = new Set();

    do {
        let current = prevstep,
            seen = new Set(prevseen),
            infinite = false;
            accumulator = prevaccum;
            alttimeline = false;  

        do {
            if (!seen.has(current)) {
                seen.add(current);
                instruction = instructions[current];
                if (instruction === undefined) {
                    jumps.clear();
                    infinite = true;
                } else {
                    step = instruction.substring(0, 3);
                    value = Number(instruction.match(/(acc|jmp|nop) ([+-]?[\d]+)/)[2]);
                    switch (step) {
                        case 'acc':
                            accumulator += value;
                            current += 1;
                            break;
                        case 'jmp':
                            if(jumps.has(current) && alttimeline == false) {
                                jumps.delete(current);
                                alttimeline = true;
                                prevstep = current + value;
                                prevaccum = accumulator;
                                prevseen = new Set(seen);
                                current += 1;
                            } else {
                                current += value;
                            }
                            break;
                        case 'nop':
                            current += 1;
                            break;
                    }
                }
            } else infinite = true;

        } while (infinite == false)

    } while (jumps.size !== 0);
    return accumulator;
}
console.log(stepper(instructions))