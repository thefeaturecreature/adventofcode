const aoc = require('../../lib/aoc.js');
const changelist = inputfile('input.txt', false);
let accum = 0,
    a = [...changelist]
        .map(part => {return part == "("?1:-1})
        .reduce((accum, part, index, res) => {
            nextstep = accum + part
            if(nextstep == -1) {
                console.log(index + 1);
                res.splice(0);
            }
            return nextstep
        });
// answer: 1771