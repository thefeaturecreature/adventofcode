const aoc = require('../../lib/aoc.js');
const course = inputfile('course.txt');

let forward = 0,
    depth = 0;
part1 = course.forEach(e => {
    const [direction, count] = e.split(' ');
    
    switch (direction) {
        case 'forward':
                forward += parseInt(count);
            break;
        case 'up':
                depth -= parseInt(count);
            break;
        case 'down':
                depth += parseInt(count);
            break;
    } 
})

console.log("part 1:",forward * depth);
//2120749