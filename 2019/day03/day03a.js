var _ =  require('lodash');
const aoc = require('../lib/aoc.js');
const wires = inputfile('./day03.txt');
const wirest1 = ['R8,U5,L5,D3','U7,R6,D4,L4'];
const wirest2 = ['R75,D30,R83,U83,L12,D49,R71,U7,L72','U62,R66,U55,R34,D71,R55,D58,R83'];
const wirest3 = ['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51','U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'];

let wirepath = new Set(),
    x, y, closest;

let addwires = (x,y) => {
    wirepath.add(x + 'x' + y);
}

let findclosest = (x, y) => {
    if((x != 0 && y != 0) && wirepath.has(x + 'x' + y)) {
        manhattan = Math.abs(x) + Math.abs(y);
        if(!closest || manhattan < closest) closest = manhattan;
    }
}

let plotwire = (wire, resolve) => {
    x = 0,
    y = 0;
    closest = false;
    wire.forEach(plot => {
        direction = plot.charAt(0);
        distance = parseInt(plot.substr(1));
        for(i=0; i < distance; i++) {
            switch(direction) {
            case 'R':
                x++
                break;
            case 'L':
                x--
                break;
            case 'D':
                y++
                break;
            case 'U':
                y--    
                break;
            }
            resolve(x, y);
        }
    })
}

processwires = pair => {
    plotwire(pair[0].split(','), addwires);   
    plotwire(pair[1].split(','), findclosest);
    return closest;
}
console.log(processwires(wirest1), 6)
console.log(processwires(wirest2), 159)
console.log(processwires(wirest3), 135)
console.log(processwires(wires), "266?")
