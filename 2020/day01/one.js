const aoc = require('../../lib/aoc.js');
const expenses = inputfile('input.txt');

const errors = expenses.map(e => Number(e))
    .every((first,i,xp) => {
        let second = 2020 - first;
        if(xp.includes(second)){
            console.log(`answer: ${first * second}`);
            return false;
        }
        return true;
    });
//Answer: 888331