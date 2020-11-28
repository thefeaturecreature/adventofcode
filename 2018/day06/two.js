// TODO: Incomplete (gives wrong answer for solution, but not for sample)

const aoc = require('../../lib/aoc.js');

const targets = inputfile('input.txt');
let xlow, xhigh, ylow, yhigh,
    region = new Set();

createhighlows = areas => areas.forEach(area => {
    xy = area.split(", ")
    xy = [Number(xy[0]), Number(xy[1])] 
    if(!xlow || xlow >= xy[0]) xlow = xy[0]
    if(!ylow || ylow >= xy[1]) ylow = xy[1]
    if(!xhigh || xhigh <= xy[0]) xhigh = xy[0]
    if(!yhigh || yhigh <= xy[1]) yhigh = xy[1]
})

finddistance = (areas, ofsize) => {
    accum = 0;
    areas.reduce((accum, deg, index) => { 
        deg = deg.split(', ')
        diff = Math.abs(x - deg[0]) + Math.abs(y - deg[1])
        dediff = parseInt(accum) + diff;
        return dediff
    })
    if(dediff < ofsize) region.add(x + "x" + y)
}

checkgrid = (areas, ofsize) => {
    createhighlows(areas)
    for(x = xlow; x <= xhigh; x++) {
        for(y = ylow; y <= yhigh; y++) {
            finddistance(areas, ofsize);
        }
    }    
}

checkgrid(['0, 0','1, 1','1, 6','8, 3','3, 4','5, 5','8, 9'], 32)
//checkgrid(targets, 10000);

// LOW: 47145
console.log("size",region.size)


