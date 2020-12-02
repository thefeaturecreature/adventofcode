const aoc = require('../../lib/aoc.js');
const policydoc = inputfile('input.txt');

const validate = passwd => passwd
    .map((e) => {
        let structure = /([\d]+)-([\d]+) ([\w]): ([\w]+)/,
            [whole,first,second,val,word] = e.match(structure);
            first = word.charAt([first - 1]) == val,
            second = word.charAt([second - 1]) == val;
        return ((first || second) && !(first && second))?1:0;
    })
    .reduce((sum,e) => sum + e);

console.log(validate(policydoc));
// Answer: 451
