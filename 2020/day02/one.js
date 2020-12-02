const aoc = require('../../lib/aoc.js');
const policydoc = inputfile('input.txt');



const validate = passwd => passwd
    .map((e) => {
        let structure = /(?<min>[\d]+)-(?<max>[\d]+) (?<val>[^:]+): (?<word>[\w]+)/,
            policy = e.match(structure).groups,
            preplace = new RegExp(policy.val,'g'),
            diff = policy.word.length - policy.word.replace(preplace,'').length;

        return (diff >= policy.min && diff <= policy.max)?1:0;
    })
    .reduce((sum,e) => sum + e);

console.log(validate(policydoc));
// Answer: 422

