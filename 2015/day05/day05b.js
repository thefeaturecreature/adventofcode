const aoc = require('../lib/aoc.js');
const sortlist = inputfile('./day05.txt');
let nicelist = new Set,
    nicepair = false,
    nicesplit = false;

sortlist.forEach(word => {
    nicesplit = false;
    nicepair = false;
    [...word].forEach( (letter, index, splitword) => {
        if(letter == word.charAt(index + 2)) nicesplit = true;
        
        letterpair = letter + word.charAt(index + 1)
        splitword.forEach( (loopletter, loopindex) => {
            if (index != loopindex && index != loopindex - 1 && index != loopindex + 1) {
                looppair = loopletter + word.charAt(loopindex + 1)
                if(looppair == letterpair) nicepair = true
            }
        })
    })

    if (nicesplit && nicepair) nicelist.add(word)
})
console.log(nicelist.size)