const aoc = require('../../lib/aoc.js');
const changelist = inputfile('input.txt','single');

const position = [...changelist]
    .map(part => (part == "("?1:-1))
    .reduce((accum, part, index, res) => {
        nextstep = accum + part;
        if(nextstep == -1) {
        console.log(index + 1);
        res.splice(0);
        }
        return nextstep;
    });
// answer: 1771