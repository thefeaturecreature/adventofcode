// TODO: Finish

const aoc = require('../lib/aoc.js');
const instruct = aoc.inputfile('./day10.txt');

let listsize = 256, skipsize = 0, circle = [], current = 0;
let instructions = instruct.split(',');

// Create array
for (i=0; i<listsize; i++){
	circle.push(i);
}

instructions.forEach(step => {
	step = parseInt(step);

	circle = knothash(circle,current,step);
	console.log(current, step, skipsize, (current + step - circle.length))
	if (current + step <= circle.length) {
		current += step;
	} else {
		current = (current + step - circle.length);
	}
	current += skipsize;
	skipsize += 1;
})

console.log('result: ',circle[0] * circle[1])

// Create knot
function knothash(array, current, step){
	let asize = array.length;
	let sliceend = current + step;

	if(current + step <= asize) {
		let lastend = asize - 1;

		let first 	= (current != 0)? 			array.slice(0,current)			: [];
		let middle 	= (step > 0)? 				array.slice(current, sliceend)	: [];
		let last 	= (sliceend <= asize)?	array.slice(sliceend,lastend)	: [];

		return first.concat(middle.reverse(),last);
	} else {
		let remainder = (current + step) - asize;

		let first = array.slice(0,remainder);
		let middle = array.slice(remainder, current);
		let last = array.slice(current,array.length - 1);
		let wholeslice = first.concat(last);
			wholeslice = wholeslice.reverse();

			first = wholeslice.slice(0,remainder);
			last = wholeslice.slice(remainder, step);

		return first.concat(middle,last);

	}
}