const aoc = require('../lib/aoc.js');
let polymerprime =  inputfile('./day05.txt');
let polymer = polymerprime,
    regs = new Array(),
    regletters = new Array(),
    reglowest,
    regvalue = polymer.length;

for (h = 0 ; h <= 25; h++){
    regletter = (h + 10).toString(36);
    regletters.push(regletter)
    regs.push(regletter + regletter.toUpperCase())
    regs.push(regletter.toUpperCase() + regletter)
}

regletters.forEach(letter => {
    polymer = polymer.replace(new RegExp(letter, 'gi'),'')
    while (true) {
        prevcycle = polymer
        regs.forEach(reg => polymer = polymer.replace(new RegExp(reg, 'g'),''))
        if(prevcycle == polymer) break;
    }
    if(polymer.length < regvalue) {
        regvalue = polymer.length;
        reglowest = letter;
    }
    polymer = polymerprime;
})
console.log(`${reglowest} at ${regvalue}`)