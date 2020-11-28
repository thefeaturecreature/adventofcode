const aoc = require('../../lib/aoc.js');
//const instruct = inputfile('input.txt','split');
const instruct = '1,2,3';
const salt = [17, 31, 73, 47, 23];

let instructmod = '';
for (let v of instruct) {
	instructmod += (v == ","?":":"") + v + (v == ","?":":"")
  console.log(v);
}

instructions = instructmod.split(':').map(step => {
	return step.charCodeAt();
})

let circle = [];
for (i=0; i<256; i++){
	circle.push(i);
}

// stepknots = (array,steps, skipsize = 0, current = 0)
console.log(instructions.concat(salt))
// TODO: Unfinished
