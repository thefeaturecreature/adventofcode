const aoc = require('../lib/aoc.js');
const instructions = inputfile('./day16.txt');

runpage = (stage) => {
  stage = stage.split('');
  instructions
    .split(',')
    .forEach(instruction => {
      let a = instruction.slice(1).split('/')[0]
      let b = instruction.slice(1).split('/')[1]
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
    }
    )
  return stage.join().replace(/\,/g,'')
}

findrepeat = stage => {  
  let construct = [];
  for(i=0;i<1000;i++) {
    stage = runpage(stage)
    if(!construct.includes(stage)) {
      construct.push(stage);
    } else {
      return i;
      break;
    }
  }       
}

let list = "abcdefghijklmnop"
let newgoal = 1000000000 % findrepeat(list);
for (i=0; i < newgoal; i++) {
  list = runpage(list);
}
console.log(list)
