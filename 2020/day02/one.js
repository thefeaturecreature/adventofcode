const aoc = require('../../lib/aoc.js');
const policydoc = inputfile('input.txt');



const validate = passwd => passwd
    .map((e) => {
        let structure = /([\d]+)-([\d]+) ([\w]): ([\w]+)/,
            [whole,min,max,val,word] = e.match(structure);
            preplace = new RegExp(val,'g'),
            diff = word.length - word.replace(preplace,'').length;

        return (diff >= min && diff <= max)?1:0;
    })
    .reduce((sum,e) => sum + e);

console.log(validate(policydoc));
// Answer: 422

