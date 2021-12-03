const aoc = require('../../lib/aoc.js');
const input = inputfile('input.txt');


let gamma = "",
    epsilon = "";
    
totalat = position => input.map(e => parseInt(e.charAt(position)))
                           .reduce((e,f) => e+f);

greaterat = position => totalat(position)>(input.length/2)?1:0;
lesserat = position => totalat(position)>(input.length/2)?0:1;

for (var i = 0; i < input[0].length; i++) {
    gamma += greaterat(i);
    epsilon += lesserat(i)
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
//741950