const aoc = require('../lib/aoc.js');
const sortlist = inputfile('./day05.txt', true);
let nicelist = new Set,
    nicepair = false,
    nicesplit = false;

sortlist.forEach(word => {
    [...word].forEach( (letter, index) => {
        if(letter == word.charAt(index + 2)) nicesplit = true;
    })
    


})
console.log(nicelist.size)

/*
It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
*/