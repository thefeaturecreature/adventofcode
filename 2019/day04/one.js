const aoc = require('../../lib/aoc.js');
const dictlow = 367479;
const dicthigh = 893698;
let valid = 0;

for(i = dictlow; i <= dicthigh; i++) {
    magic = String(i);
    if(    i.digitAt(0) <= i.digitAt(1)
        && i.digitAt(1) <= i.digitAt(2)
        && i.digitAt(2) <= i.digitAt(3)
        && i.digitAt(3) <= i.digitAt(4)
        && i.digitAt(4) <= i.digitAt(5)
        && (magic.count(i.digitAt(1)) > 2 
        ||  magic.count(i.digitAt(2)) > 2 
        ||  magic.count(i.digitAt(3)) > 2 
        ||  magic.count(i.digitAt(4)) > 2 )) {
            valid++;
    }  
}
console.log(valid);
// Answer: 495
/*
Refactored this to use custom prototypes to experiment with custom prototypes. 
It is slower than the string conversion for all parameters in the conditional used in part b.
*/