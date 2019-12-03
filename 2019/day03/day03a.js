const aoc = require('../lib/aoc.js');
const wires = inputfile('./day03.txt'); // not 517
const wirest1 = ['R8,U5,L5,D3','U7,R6,D4,L4'] // = 6
const wirest2 = ['R75,D30,R83,U83,L12,D49,R71,U7,L72','U62,R66,U55,R34,D71,R55,D58,R83'] // = 159
const wirest3 = ['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51','U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'] // = 135

let wire1 = new Set(),
    currentx = 0, 
    currenty = 0, 
    closest = false;

let addwires = (currentx,currenty) => {
    wire1.add(currentx + 'x' + currenty)
}

let findclosest = (currentx, currenty) => {
    if(wire1.has(currentx + 'x' + currenty) && (currentx != 0 && currenty != 0)) {
        manhattan = Math.abs(currentx) + Math.abs(currenty);
        if(!closest || manhattan < closest) closest = manhattan;
    }
}

let plotwire = (plot, resolve) => {
direction = plot.charAt(0);
    distance = parseInt(plot.substr(1));
    switch(direction) {
        case 'R':
            current = currentx;
            target = currentx + distance;
            for(i=current; i <= target; i++) {
                currentx = i;
                resolve(currentx, currenty);
            }
            break;
        case 'L':
            current = currentx;
            target = currentx - distance;
            for(i=current; i >= target; i--) {
                currentx = i;
                resolve(currentx, currenty);
            }
            break;
        case 'D':
            current = currenty;
            target = currenty + distance;
            for(i=current; i <= target; i++) {
                currenty = i;
                resolve(currentx, currenty);
            }
            break;
        case 'U':
            current = currenty;
            target = currenty - distance;
            for(i=current; i >= target; i--) {
                currenty = i;
                resolve(currentx, currenty);
            }
            break;
    }
} 

processwires = wire => {
    wire[0].split(',').forEach(plot => {
        plotwire(plot, addwires);
    })
    
    currentx = 0,
    currenty = 0;
    
    wire[1].split(',').forEach(plot => {
        plotwire(plot, findclosest);
    })   
    return closest 
}

console.log(processwires(wires))
