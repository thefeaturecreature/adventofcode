const aoc = require('../../lib/aoc.js');
const directions = inputfile('input.txt','single');

let collector = new Set,
    botx = 0,
    boty = 0;

const present = [...directions]
    .forEach(part => {
        switch (part) {
            case '^': 
                boty--;
                break;
            case '>': 
                botx++;
                break;
            case 'v': 
                boty++;                    
                break;
            case '<': 
                botx--;                    
                break;
        }
        house = botx + "x" + boty;
        if(!collector.has(house)) {
            collector.add(house);
        }
    });

console.log(collector.size);
// answer: 2565