const aoc = require('../../lib/aoc.js');
const sortlist = inputfile('input.txt');
let nicelist = new Set;

const list = sortlist.forEach(word => {
    if(!word.includes('ab') && !word.includes('cd') && !word.includes('pq') && !word.includes('xy')) {
        wordvowels = word.replace(/[aeiou]/gi,'');
        if (word.length - wordvowels.length >= 3 ) {
            wordrepeats = word.replace(/(.)\1{1,}/gi,'');
            if(word.length != wordrepeats.length) {
                nicelist.add(word);
            }
        }
    }
})

console.log(nicelist.size);
// answer: 236