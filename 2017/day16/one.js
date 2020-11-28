const aoc = require('../../lib/aoc.js');
const instructions = inputfile('input.txt','split');

let list = "abcdefghijklmnop";

runpage = (stage) => {
  stage = stage.split('');
  instructions
    .forEach(instruction => {
      let a = instruction.slice(1).split('/')[0],
          b = instruction.slice(1).split('/')[1];
      switch (instruction.charAt(0)){
        case 's':
          stage = stage.slice(parseInt(stage.length - a)).concat(stage.slice(0, parseInt(stage.length - a)))
          break;
        case 'x':
          [stage[a], stage[b]] = [stage[b], stage[a]]
          break;
        case 'p':
        r = stage.indexOf(a);
        s = stage.indexOf(b);
        [stage[r], stage[s]] = [stage[s], stage[r]]
        break;
      }
    })
  return stage.join().replace(/\,/g,'')
}

console.log(runpage(list));
// Answer: namdgkbhifpceloj