const aoc = require('../../lib/aoc.js');
const policydoc = inputfile('input.txt');

const validate = passwd => passwd
    .map((e) => {
        let structure = /(?<first>[\d]+)-(?<second>[\d]+) (?<val>[^:]+): (?<word>[\w]+)/,
            policy = e.match(structure).groups,
            first = policy.word.charAt([policy.first - 1]) == policy.val,
            second = policy.word.charAt([policy.second - 1]) == policy.val;
        return ((first || second) && !(first && second))?1:0;
    })
    .reduce((sum,e) => sum + e);

console.log(validate(policydoc));
// Answer: 451
