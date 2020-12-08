const aoc = require('../../lib/aoc.js');
const instructions = inputfile('input.txt');


const stepper = instructions => {
    let accumulator = 0,
        jumps = new Set(instructions.map((e,i) => (e.match(/jmp/) !== null)?i:'e').filter(e=> e !== 'e'));    

    do {
        let current = 0,
            seen = new Set(),
            infinite = false,
            testjump = Array.from(jumps)[0];

            accumulator = 0;
            jumps.delete(testjump);

        do {
            if (!seen.has(current)) {
                seen.add(current);
                instruction = instructions[current];
                if (instruction === undefined) {
                    jumps.clear;
                    infinite = true;
                    passval = accumulator;
                } else {
                    step = instruction.substring(0, 3);
                    value = Number(instruction.match(/(acc|jmp|nop) ([+-]?[\d]+)/)[2]);
                    switch (step) {
                        case 'acc':
                            accumulator += value;
                            current += 1;
                            break;
                        case 'jmp':
                            if(current == testjump) {
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
    return passval;
}
console.log(stepper(instructions))