const aoc = require('../../lib/aoc.js');

const targets = inputfile('input.txt');
let xlow, xhigh, ylow, yhigh,
    best = [],
    oob = new Set();

createhighlows = areas => areas.forEach(area => {
    xy = area.split(", ")
    xy = [Number(xy[0]), Number(xy[1])] 
    if(!xlow || xlow >= xy[0]) xlow = xy[0]
    if(!ylow || ylow >= xy[1]) ylow = xy[1]
    if(!xhigh || xhigh <= xy[0]) xhigh = xy[0]
    if(!yhigh || yhigh <= xy[1]) yhigh = xy[1]
})

findmatch = areas => {
    bestmatch = '';
    areas.forEach((deg, index) => { 
        deg = deg.split(', ');
        diff = Math.abs(x - deg[0]) + Math.abs(y - deg[1]);
        if(!bestmatch || bestmatch[1] > diff) bestmatch = [index, Number(diff)]
    })
    if(x == xlow || x == xhigh || y == ylow || y == yhigh) oob.add(bestmatch[0])
    best[bestmatch[0]] = (best[bestmatch[0]]?best[bestmatch[0]] + 1 : 1);
}

checkgrid = areas => {
    createhighlows(areas)
    for(x = xlow; x <= xhigh; x++) {
        for(y = ylow; y <= yhigh; y++) {
            findmatch(areas);
        }
    }    
}


//checkgrid(['0, 0','1, 1','1, 6','8, 3','3, 4','5, 5','8, 9'])
checkgrid(targets);

oob.forEach(a => best[a] = 0)
console.log(best.reduce((max,a) => {return (a > max? a : max)}));
// Answer: 3569