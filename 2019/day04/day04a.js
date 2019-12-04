const aoc = require('../lib/aoc.js');
const dictlow = 367479;
const dicthigh = 893698;
let valid = new Set();

for(i = dictlow; i <= dicthigh; i++) {
    magic = String(i);
    if(    magic.charAt(0) <= magic.charAt(1)
        && magic.charAt(1) <= magic.charAt(2)
        && magic.charAt(2) <= magic.charAt(3)
        && magic.charAt(3) <= magic.charAt(4)
        && magic.charAt(4) <= magic.charAt(5)
        && (magic.split(magic.charAt(0)).length > 2 
        ||  magic.split(magic.charAt(1)).length > 2 
        ||  magic.split(magic.charAt(2)).length > 2 
        ||  magic.split(magic.charAt(3)).length > 2 
        ||  magic.split(magic.charAt(4)).length > 2 
        ||  magic.split(magic.charAt(5)).length > 2 )) {
            valid.add(magic)
    }  
}
console.log(valid.size)