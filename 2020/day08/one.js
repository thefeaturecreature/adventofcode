const aoc = require('../../lib/aoc.js');
const instructions = inputfile('input.txt');

const stepper = instructions => {
    let accumulator = 0,
        current = 0,
        seen = new Set(),
        infinite = false;

    do {
        if (!seen.has(current)) {
            seen.add(current);
            instruction = instructions[current];
            step = instruction.substring(0, 3);
            value = Number(instruction.match(/(acc|jmp|nop) ([+-]?[\d]+)/)[2]);
           switch (step) {
                case 'acc':
                    accumulator += value;
                    current += 1;
                    break;
                case 'jmp':
                    current += value;
                    break;
                case 'nop':
                    current += 1;
                    break;
            }
        } else infinite = true;

    } while (infinite == false)

    return accumulator;
}
console.log(stepper(instructions))