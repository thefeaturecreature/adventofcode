const aoc = require('../../lib/aoc.js');
const boardingpasses = inputfile('input.txt');

const scantickets = scans => { 
    let highest = 0,
        lowest = 1000;
    seats =  scans.map((scan) =>{
        let rowdef = scan.match(/^[\w]{7}/)[0],
            rowbin = rowdef.replace(/F/g,'0').replace(/B/g,'1'),
            row = parseInt(rowbin,2);

        let coldef = scan.match(/[\w]{3}$/)[0],
            colbin = coldef.replace(/L/g,'0').replace(/R/g,'1'),
            col = parseInt(colbin,2);
    
        let seat = (row * 8) + col;
        highest = (seat > highest)?seat:highest;
        lowest = (seat < lowest)?seat:lowest;
        return seat;
    }).reduce((sum,a)=>sum += a);
    
    return (((highest - lowest + 1) * (highest + lowest))/2) - seats
}

console.log(scantickets(boardingpasses));
// Answer: 682