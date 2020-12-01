const aoc = require('../../lib/aoc.js');
const expenses = inputfile('input.txt');

const errors = expenses.map(e => Number(e))
    .every((first,i,xp) => {
        let diff = 2020 - first;
        xp.every((second,j,xp) => {
            let third = diff - second;
            if(third > 0 
                && first != second 
                && first != third 
                && second != third 
                && xp.includes(third)){
                    console.log(`Answer: ${first * second * third}`);
                    diff = -1;
                    return false;
            }
            return true;
        });        
        return (diff != -1);
    });
// Answer: 130933530