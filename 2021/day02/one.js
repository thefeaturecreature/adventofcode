const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');

let p1forward = 0,
    p1depth = 0;
part1 = input.forEach(e => {
    const [direction, count] = e.split(' ');
    
    switch (direction) {
        case 'forward':
                p1forward += parseInt(count);
            break;
        case 'up':
                p1depth -= parseInt(count);
            break;
        case 'down':
                p1depth += parseInt(count);
            break;
    } 
})

console.log("part 1:",p1forward * p1depth);
//2120749