const aoc = require('../../lib/aoc.js');
const answers = inputfile('input.txt',false).split('\n\n');

answergroups = answers => answers.map(group=> {
    let groupsize = group.split('\n').length,
        collector = new Set();
        distinctanswers = new Set(group
            .replace(/\n/g,'')
            .split('')
        );
        distinctanswers.forEach(answer => {
            preplace = new RegExp(answer,'g');
            if((group.length - group.replace(preplace,'').length) == groupsize ){
                collector.add(answer);
            };
        });  
        return collector.size;
    }).reduce((sum,a)=> sum+=a);

console.log(answergroups(answers));