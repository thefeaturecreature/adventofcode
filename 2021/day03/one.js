const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');


let gamma = "",
    epsilon = "";
    
totalat = position => input.map(e => parseInt(e.substr(position,1))).reduce((e,f) => e+f);

for (var i = 0; i < input[0].length; i++) {
    gamma += (totalat(i)>(input.length/2)?1:0);
    epsilon += (totalat(i)>(input.length/2)?0:1)
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
//741950