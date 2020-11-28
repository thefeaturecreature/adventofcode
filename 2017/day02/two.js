const aoc = require('../../lib/aoc.js');
const spread = inputfile('input.txt');

let day2 = lines => 
Array.from(lines)
	.map(line => {
	    elements = line.split(' ');
		let diff = 0;
		allcompare(elements, (numA, numB) => {
			if(numA != numB && numA % numB == 0) { 
				diff = numA / numB;
			}
		})
		return diff;
	})
  .reduce((checksum, item) => checksum + item)

console.log(day2(spread));
// answer: 295229