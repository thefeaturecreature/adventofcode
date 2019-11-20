const aoc = require('../lib/aoc.js');
let polymer =  inputfile('./day05.txt');
let regs = []

for (h = 10; h <= 35; h++){
  regletter = (h).toString(36);
  regs.push(regletter + regletter.toUpperCase())
  regs.push(regletter.toUpperCase() + regletter)
}

while (true) {
  prevcycle = polymer
  regs.forEach(reg => polymer = polymer.replace(new RegExp(reg, 'g'),''))
  if(prevcycle == polymer) break;
}
console.log(polymer.length);

