const aoc = require('../../lib/aoc.js');
const answers = inputfile('input.txt',false).split('\n\n');

answergroups = answers => answers.map(group=> {
    let collector = new Set(group
            .replace(/\n/g,'')
            .split(''));
        return collector.size;
    }).reduce((sum,a)=> sum+=a);

console.log(answergroups(answers));