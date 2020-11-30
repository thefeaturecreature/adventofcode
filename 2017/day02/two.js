const aoc = require('../../lib/aoc.js');
const spread = inputfile('input.txt');

const check = spread
	.map(line => {
	    const elements = line.split(' ');
		let diff = 0;
		allcompare(elements, (numA, numB) => {
			if(numA != numB && numA % numB == 0) { 
				diff = numA / numB;
			}
		})
		return diff;
	})
  .reduce((checksum, item) => checksum + item);

console.log(check);
// answer: 246