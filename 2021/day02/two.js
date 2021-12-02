const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');

let aim = 0,
    forward = 0,
    depth = 0;
part1 = input.forEach(e => {
    const [direction, count] = e.split(' ');
    
    switch (direction) {
        case 'forward':
                forward += parseInt(count);
                depth += aim * parseInt(count);
            break;
        case 'up':
                aim -= parseInt(count);
            break;
        case 'down':
                aim += parseInt(count);
            break;
    } 
})

console.log("part 2:",forward * depth);
//2138382217